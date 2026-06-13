import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Res,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { UrlsService } from './providers/urls.service';
import type { Response } from 'express';
import { PatchUrlDto } from './dtos/patch-url.dto';
import { ApiTags } from '@nestjs/swagger';
import { PublicRoute } from '../auth/decorators/publicRoute.decorator';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import type { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
@ApiTags('URLS')
@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get()
  public fetchAllUrls(@ActiveUser() user: ActiveUserData) {
    return this.urlsService.fetchUrls(user);
  }

  @Post()
  public createUrl(
    @Body() createUrlDto: CreateUrlDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.urlsService.createUrl(createUrlDto, user);
  }

  @PublicRoute()
  @Get(':shortCode')
  public async redirectUrl(
    @Param('shortCode') shortCode: string,
    @Res() res: Response,
  ) {
    // handled redirects
    const url = await this.urlsService.redirect(shortCode);
    return res.redirect(url.originalUrl);
  }

  @Delete(':id')
  public async deleteUrl(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: ActiveUserData,
  ) {
    return await this.urlsService.deleteUrl(id, user);
  }

  @Patch(':id')
  public async patchUrl(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchUrlDto: PatchUrlDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return await this.urlsService.patchUrl(id, patchUrlDto, user);
  }
}
