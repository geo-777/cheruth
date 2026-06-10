import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlsService } from './providers/urls.service';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService],
})
export class UrlsModule {}
