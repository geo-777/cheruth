import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UrlsService } from '../../urls/providers/urls.service';
import { VerifyRedirect } from '../dto/verify-redirect.dto';

@Injectable()
export class RedirectsService {
  constructor(private readonly urlService: UrlsService) {}

  public async handleRedirect(shortCode: string) {
    const urlData = await this.urlService.redirect(shortCode);
    if (urlData?.password) {
      return { requiresPassword: true };
    }

    return urlData;
  }

  public async verifyRedirect(dto: VerifyRedirect) {
    const urlData = await this.urlService.redirect(dto.shortCode);
    if (urlData.password === dto.password) {
      return urlData;
    } else {
      throw new UnauthorizedException('Incorrect password');
    }
  }
}
