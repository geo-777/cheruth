import {
  Controller,
  Get,
  Param,
  Res,
  Post,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { RedirectsService } from './providers/redirects.service';
import type { Response } from 'express';
import { PublicRoute } from '../auth/decorators/publicRoute.decorator';
import { VerifyRedirect } from './dto/verify-redirect.dto';
import { join } from 'path';

@Controller()
export class RedirectsController {
  constructor(private readonly redirectService: RedirectsService) {}

  @PublicRoute()
  @Get(':shortCode')
  async redirect(@Param('shortCode') shortCode: string, @Res() res: Response) {
    const url = await this.redirectService.handleRedirect(shortCode);

    if ('requiresPassword' in url) {
      // return password page
      return res.sendFile(join(process.cwd(), 'public', 'password.html'));
    }

    return res.redirect(url.originalUrl);
  }

  @PublicRoute()
  @Post('/api/verify')
  async verifyRedirect(@Body() dto: VerifyRedirect) {
    const url = await this.redirectService.verifyRedirect(dto);
    if (url) {
      return url.originalUrl;
    } else {
      throw new InternalServerErrorException('Couldnt process url');
    }
  }
}
