import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlsService } from './providers/urls.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '../auth/config/jwt.config';
@Module({
  imports: [
    TypeOrmModule.forFeature([Url]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [UrlsController],
  providers: [UrlsService],
})
export class UrlsModule {}
