import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { HashProvider } from './providers/hashing.provider';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from './config/jwt.config';
import { GenerateTokensProvider } from './providers/generate-token.provider';
import { AccessTokenGuard } from './guards/access-token.guard';
import { APP_GUARD } from '@nestjs/core';
import { RefreshTokenProvider } from './providers/refresh-token.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    HashProvider,
    GenerateTokensProvider,
    //this is injecting the auth guard globally.. so now all routes are privte by default
    //use public decorator now
    AccessTokenGuard,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
    RefreshTokenProvider,
  ],
  imports: [
    UsersModule,
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
})
export class AuthModule {}
