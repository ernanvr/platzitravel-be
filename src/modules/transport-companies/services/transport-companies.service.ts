import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateTransportCompany,
  UpdateTransportCompany,
} from '../dtos/transport-companies.dtos';
import { TransportCompany } from '../entities/transport-companies.entity';

@Injectable()
export class TransportCompaniesService {
  constructor(
    @InjectRepository(TransportCompany)
    private transportCompanyRepo: Repository<TransportCompany>,
  ) {}

  findAll() {
    return this.transportCompanyRepo.find();
  }

  findOne(id: number) {
    const transportCompany = this.transportCompanyRepo.findOne({
      where: { id },
    });

    if (!transportCompany) {
      throw new NotFoundException(`The element with ${id} was not found`);
    }

    return transportCompany;
  }

  create(payload: CreateTransportCompany) {
    const newTransportCompany = this.transportCompanyRepo.create(payload);

    return this.transportCompanyRepo.save(newTransportCompany);
  }

  async update(id: number, payload: UpdateTransportCompany) {
    const transportCompany = await this.transportCompanyRepo.findOne({
      where: { id },
    });
    if (!transportCompany) {
      throw new NotFoundException(`The element with ${id} was not found`);
    }
    this.transportCompanyRepo.merge(transportCompany, payload);
    return this.transportCompanyRepo.save(transportCompany);
  }

  async delete(id: number) {
    await this.transportCompanyRepo.delete(id);
    return true;
  }
}
