import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import config from '../../../config/config';
import { ConfigType } from '@nestjs/config';
import { PayloadToken } from '../models/token.models';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwt.secretOrKey,
    });
  }

  async validate(payload: PayloadToken) {
    return payload;
  }
}
