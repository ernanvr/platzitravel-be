import { Controller, Get } from '@nestjs/common';
import { TransportCompaniesService } from './transport-companies.service';

@Controller('transport-companies')
export class TransportCompaniesController {
  constructor(private transportCompanyService: TransportCompaniesService) {}

  @Get()
  findAll() {
    return this.transportCompanyService.findAll();
  }
}
