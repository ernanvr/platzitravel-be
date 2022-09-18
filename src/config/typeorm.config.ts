import config from './config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  inject: [config.KEY],
  useFactory: async (
    configuration: ConfigType<typeof config>,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres' as const,
      host: configuration.database.host,
      port: configuration.database.port,
      username: configuration.database.username,
      password: configuration.database.password,
      database: configuration.database.name,
      entities: ['src/modules/**/entities/*.entity{.ts,.js}'],
      migrations: ['src/database/migrations/*.{.ts,.js}'],
      autoLoadEntities: true,
    };
  },
};
