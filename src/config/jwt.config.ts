import config from './config';
import { ConfigType } from '@nestjs/config';

export const jwtRegisterAsyncConfig = {
  inject: [config.KEY],
  useFactory: async (configuration: ConfigType<typeof config>) => {
    return {
      secret: configuration.jwt.secretOrKey,
      signOptions: { expiresIn: configuration.jwt.timeExpiring },
    };
  },
};
