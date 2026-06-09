import { Controller, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // POST /auth/register
  register() {
    return this.authService.register();
  }

  @Post('login') // POST /auth/login
  login() {
    return this.authService.login();
  }
}
