import { Module } from '@nestjs/common';
import { RedirectsController } from './redirects.controller';
import { RedirectsService } from './providers/redirects.service';
import { UrlsModule } from '../urls/urls.module';

@Module({
  controllers: [RedirectsController],
  providers: [RedirectsService],
  imports: [UrlsModule],
})
export class RedirectsModule {}
