import { Module } from '@nestjs/common';
import { TransportCompaniesService } from './services/transport-companies.service';
import { TransportCompaniesController } from './controllers/transport-companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportCompany } from './entities/transport-companies.entity';
import { CompanyTypesController } from './controllers/company-types.controller';
import { CompanyTypesService } from './services/company-types.service';
import { TransportCompanyProductsService } from './services/transport-company-products.service';
import { TransportCompanyProductsController } from './controllers/transport-company-products.controller';
import { TicketTypesController } from './controllers/ticket-types.controller';
import { TicketTypesService } from './services/ticket-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([TransportCompany])],
  providers: [
    TransportCompaniesService,
    CompanyTypesService,
    TransportCompanyProductsService,
    TicketTypesService,
  ],
  controllers: [
    TransportCompaniesController,
    CompanyTypesController,
    TransportCompanyProductsController,
    TicketTypesController,
  ],
})
export class TransportCompaniesModule {}
