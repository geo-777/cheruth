import { Module } from '@nestjs/common';
import { AnalyticsService } from './provider/analytics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Click } from './entities/clicks.entity';
import { AnalyticsController } from './analytics.controller';
import { UrlsModule } from '../urls/urls.module';

@Module({
  imports: [TypeOrmModule.forFeature([Click]), UrlsModule],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
