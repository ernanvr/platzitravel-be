import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';

import { TransportCompaniesModule } from './modules/transport-companies/transport-companies.module';
import { OffersModule } from './modules/offers/offers.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { LocationsModule } from './modules/locations/locations.module';
import { UsersModule } from './modules/users/users.module';
import { PromoOffersModule } from './modules/promo-offers/promo-offers.module';
import { enviroments } from './config/enviroments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'test', 'prod').required(),
        DATABASE_PORT: Joi.number().positive().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres' as const,
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
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
  ],
})
export class AppModule {}
