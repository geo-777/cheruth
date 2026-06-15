import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './providers/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { PublicRoute } from './decorators/publicRoute.decorator';
import type { ActiveUserData } from './interfaces/active-user-data.interface';
import { ActiveUser } from './decorators/active-user.decorator';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({
    description: 'Register',
    example: { message: 'User registered successfully' },
  })
  @PublicRoute()
  @Post('register')
  public register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @ApiOkResponse({
    description: 'Login',
    example: {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    },
  })
  @PublicRoute()
  @Post('login')
  @HttpCode(200)
  public login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  @ApiOkResponse({
    description: 'user details fetch',
    example: {
      username: 'user',
      email: 'email@gmail.com',
      createdAt: '2026-06-13T06:42:32.099Z',
    },
  })
  @Get('me')
  @ApiBearerAuth()
  public me(@ActiveUser() user: ActiveUserData) {
    return this.authService.me(user);
  }

  @ApiOkResponse({
    description: 'refresh tokens',
    example: {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    },
  })
  @PublicRoute()
  @Post('refresh')
  @HttpCode(200)
  public refresh(@Body() dto: RefreshTokenDto) {
    return this.authService.refresh(dto);
  }
}
