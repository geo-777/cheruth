import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { UrlsService } from './providers/urls.service';
import type { Response } from 'express';

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
    const url = await this.urlsService.redirect(shortCode);
    console.log(url);
    return res.redirect(url.originalUrl);
  }
}
