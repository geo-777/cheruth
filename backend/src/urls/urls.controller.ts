import { Controller, Post, Body } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';

@Controller('urls')
export class UrlsController {
  @Post()
  public createUrl(@Body() createUrlDto: CreateUrlDto) {
    console.log(createUrlDto);
  }
}
