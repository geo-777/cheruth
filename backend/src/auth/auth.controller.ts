import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './providers/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { PublicRoute } from './decorators/publicRoute.decorator';

@PublicRoute()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  public register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
  @Post('login')
  @HttpCode(200)
  public login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }
}
