import { Module } from '@nestjs/common';
import { TransportCompaniesService } from './services/transport-companies.service';
import { TransportCompaniesController } from './controllers/transport-companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportCompany } from './entities/transport-companies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransportCompany])],
  providers: [TransportCompaniesService],
  controllers: [TransportCompaniesController],
})
export class TransportCompaniesModule {}
