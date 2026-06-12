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
  UseGuards,
} from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { UrlsService } from './providers/urls.service';
import type { Response } from 'express';
import { PatchUrlDto } from './dtos/patch-url.dto';
import { ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';

@UseGuards(AccessTokenGuard)
@ApiTags('URLS')
@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  public createUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.createUrl(createUrlDto);
  }

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
  public async deleteUrl(@Param('id', ParseIntPipe) id: number) {
    return await this.urlsService.deleteUrl(id);
  }

  @Patch(':id')
  public async patchUrl(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchUrlDto: PatchUrlDto,
  ) {
    return await this.urlsService.patchUrl(id, patchUrlDto);
  }
}
