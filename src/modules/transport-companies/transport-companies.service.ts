import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportCompany } from './entities/transport-companies.entity';

@Injectable()
export class TransportCompaniesService {
  constructor(
    @InjectRepository(TransportCompany)
    private transportCompanyRepo: Repository<TransportCompany>,
  ) {}

  findAll() {
    return this.transportCompanyRepo.find();
  }
}
