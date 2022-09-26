import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { MediaModule } from './modules/media/media.module';
import config from './config/config';
import { typeOrmAsyncConfig } from './config/typeorm.config';

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
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    TransportCompaniesModule,
    PromoOffersModule,
    OffersModule,
    ContractsModule,
    HotelsModule,
    LocationsModule,
    UsersModule,
    MediaModule,
  ],
})
export class AppModule {}
