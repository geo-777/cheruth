import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';

@Module({
  controllers: [UrlsController]
})
export class UrlsModule {}
