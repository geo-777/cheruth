import { Controller, Post, Body } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { UrlsService } from './providers/urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  public createUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.createUrl(createUrlDto);
  }
}
