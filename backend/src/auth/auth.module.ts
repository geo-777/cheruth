import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { HashProvider } from './providers/hashing.provider';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, HashProvider],
  imports: [UsersModule],
})
export class AuthModule {}
