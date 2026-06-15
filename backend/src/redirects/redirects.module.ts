import { Module } from '@nestjs/common';
import { RedirectsController } from './redirects.controller';
import { RedirectsService } from './providers/redirects.service';
import { UrlsModule } from '../urls/urls.module';
import { AnalyticsModule } from '../analytics/analytics.module';

@Module({
  controllers: [RedirectsController],
  providers: [RedirectsService],
  imports: [UrlsModule, AnalyticsModule],
})
export class RedirectsModule {}
