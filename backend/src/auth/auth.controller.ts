import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './providers/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { PublicRoute } from './decorators/publicRoute.decorator';
import type { ActiveUserData } from './interfaces/active-user-data.interface';
import { ActiveUser } from './decorators/active-user.decorator';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @PublicRoute()
  @Post('register')
  public register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @PublicRoute()
  @Post('login')
  @HttpCode(200)
  public login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  public me(@ActiveUser() user: ActiveUserData) {
    return this.authService.me(user);
  }

  @PublicRoute()
  @Post('refresh')
  @HttpCode(200)
  public refresh(@Body() dto: RefreshTokenDto) {
    return this.authService.refresh(dto);
  }
}
