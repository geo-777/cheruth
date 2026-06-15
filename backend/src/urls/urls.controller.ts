import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { UrlsService } from './providers/urls.service';
import { PatchUrlDto } from './dtos/patch-url.dto';
import { ApiBearerAuth, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import type { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
@ApiTags('URLS')
@Controller('api/urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  /* -------------------------- GET ALL URLS REQUEST -------------------------- */
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'User URLs fetched successfully',
    schema: {
      example: [
        {
          id: 1,
          originalUrl: 'https://youtube.com',
          title: 'Youtube',
          expiresAt: null,
          createdAt: '2026-06-13T07:03:25.382Z',
          updatedAt: '2026-06-13T07:03:25.382Z',
          shortCode: 'iUJagAYF',
          isActive: true,
        },
      ],
    },
  })
  @Get()
  public fetchAllUrls(@ActiveUser() user: ActiveUserData) {
    return this.urlsService.fetchUrls(user);
  }

  /* --------------------------- POST A URL REQUEST --------------------------- */
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'User URL posted successfully',
    example: {
      id: 1,
      originalUrl: 'https://google.com',
      title: 'Google',
      expiresAt: '2007-01-16T00:00:00.000Z',
      createdAt: '2026-06-13T07:32:10.548Z',
      updatedAt: '2026-06-13T07:32:10.548Z',
      shortCode: 'Qv-jQNIe',
      isActive: true,
    },
  })
  @Post()
  public createUrl(
    @Body() createUrlDto: CreateUrlDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.urlsService.createUrl(createUrlDto, user);
  }

  /* -------------------------------- DELETING -------------------------------- */
  @ApiOkResponse({
    description: 'User URL deleted successfully',
    example: {
      deleted: true,
      id: 5,
    },
  })
  @ApiBearerAuth()
  @Delete(':id')
  public async deleteUrl(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: ActiveUserData,
  ) {
    return await this.urlsService.deleteUrl(id, user);
  }

  /* -------------------------------- PATCHING -------------------------------- */
  @ApiOkResponse({
    description: 'User URL posted successfully',
    example: {
      id: 1,
      originalUrl: 'https://google.com',
      title: 'Google',
      expiresAt: '2007-01-16T00:00:00.000Z',
      createdAt: '2026-06-13T07:32:10.548Z',
      updatedAt: '2026-06-13T07:32:10.548Z',
      shortCode: 'Qv-jQNIe',
      isActive: true,
    },
  })
  @ApiBearerAuth()
  @Patch(':id')
  public async patchUrl(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchUrlDto: PatchUrlDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return await this.urlsService.patchUrl(id, patchUrlDto, user);
  }
}
