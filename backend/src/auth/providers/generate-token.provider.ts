import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import type { ConfigType } from '@nestjs/config';
import type { ActiveUserData } from '../interfaces/active-user-data.interface';
import { User } from '../../users/user.entity';
@Injectable()
export class GenerateTokensProvider {
  constructor(
    /* --------------------------- Inject jwtService -------------------------- */

    private readonly jwtService: JwtService,

    /* ------------------------- Inject jwtConfiguration ------------------------ */

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  public async signToken<T>(userId: number, expiresIn: number, payload?: T) {
    console.log(this.jwtConfiguration);
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn,
      },
    );
  }

  public async generateTokens(user: User) {
    const payload = { email: user.email };
    type PartialUser = Partial<ActiveUserData>;

    const [accessToken, refreshToken] = await Promise.all([
      // Generate access token
      this.signToken<PartialUser>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        payload,
      ),

      // Generate refresh token
      this.signToken<PartialUser>(
        user.id,
        this.jwtConfiguration.refreshTokenTtl,
        payload,
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
