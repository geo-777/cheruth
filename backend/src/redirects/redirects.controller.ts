import {
  Controller,
  Get,
  Param,
  Res,
  Post,
  Body,
  InternalServerErrorException,
  Req,
} from '@nestjs/common';
import { RedirectsService } from './providers/redirects.service';
import type { Request, Response } from 'express';
import { PublicRoute } from '../auth/decorators/publicRoute.decorator';
import { VerifyRedirect } from './dto/verify-redirect.dto';
import { join } from 'path';
import { AnalyticsService } from '../analytics/provider/analytics.service';
import { ClickEntry } from '../analytics/interfaces/click-entry.interface';
@Controller()
export class RedirectsController {
  constructor(
    private readonly redirectService: RedirectsService,
    private readonly analyticService: AnalyticsService,
  ) {}

  @PublicRoute()
  @Get(':shortCode')
  async redirect(
    @Param('shortCode') shortCode: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    //recording click
    const click: ClickEntry = {
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer,
    };

    const url = await this.redirectService.handleRedirect(shortCode);
    await this.analyticService.recordClick(click, shortCode);

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
