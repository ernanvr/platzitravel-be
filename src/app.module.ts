import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportCompaniesModule } from './modules/transport-companies/transport-companies.module';
import { OffersModule } from './modules/offers/offers.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { LocationsModule } from './modules/locations/locations.module';
import { UsersModule } from './modules/users/users.module';
import { PromoOffersModule } from './modules/promo-offers/promo-offers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'HoL4!',
      database: 'platzitravel',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
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
