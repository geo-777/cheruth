import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlsService } from './providers/urls.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  controllers: [UrlsController],
  providers: [UrlsService],
})
export class UrlsModule {}
