import { Module } from '@nestjs/common';
import { CustomersModule } from './modules/customers/customers.module';
import { AgentsModule } from './modules/agents/agents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesModule } from './modules/countries/countries.module';
import { CitiesModule } from './modules/cities/cities.module';
import { TransportCompaniesModule } from './modules/transport-companies/transport-companies.module';
import { OffersModule } from './modules/offers/offers.module';
import { PromoOffersModule } from './modules/promo-offers/promo-offers.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { HotelsModule } from './modules/hotels/hotels.module';

@Module({
  imports: [
    CustomersModule,
    AgentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'HoL4!',
      database: 'platzitravel',
      entities: [],
      synchronize: true,
    }),
    CountriesModule,
    CitiesModule,
    TransportCompaniesModule,
    OffersModule,
    PromoOffersModule,
    ContractsModule,
    HotelsModule,
  ],
})
export class AppModule {}
