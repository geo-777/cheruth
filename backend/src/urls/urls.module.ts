import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlsService } from './providers/urls.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Url]),
    // ConfigModule.forFeature(jwtConfig),
    // JwtModule.registerAsync(jwtConfig.asProvider()),
    UsersModule,
  ],
  controllers: [UrlsController],
  providers: [UrlsService],
})
export class UrlsModule {}
