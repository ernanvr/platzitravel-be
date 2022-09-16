import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { TransportCompaniesModule } from './modules/transport-companies/transport-companies.module';
import { OffersModule } from './modules/offers/offers.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { LocationsModule } from './modules/locations/locations.module';
import { UsersModule } from './modules/users/users.module';
import { PromoOffersModule } from './modules/promo-offers/promo-offers.module';
// import { enviroments } from './config/enviroments';
import { GcloudStorageModule } from './modules/gcloud-storage/gcloud-storage.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'test', 'prod').required(),
        DATABASE_PORT: Joi.number().positive().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (configuration: ConfigType<typeof config>) => ({
        type: 'postgres' as const,
        host: configuration.database.host,
        port: configuration.database.port,
        username: configuration.database.username,
        password: configuration.database.password,
        database: configuration.database.name,
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    TransportCompaniesModule,
    PromoOffersModule,
    OffersModule,
    ContractsModule,
    HotelsModule,
    LocationsModule,
    UsersModule,
    GcloudStorageModule,
  ],
})
export class AppModule {}
