import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreateTransportCompany,
  UpdateTransportCompany,
} from '../dtos/transport-companies.dtos';
import { TransportCompany } from '../entities/transport-companies.entity';

@Injectable()
export class TransportCompaniesService {
  constructor(
    @InjectRepository(TransportCompany)
    private transportCompanyRepository: Repository<TransportCompany>,
  ) {}

  findAll(): Promise<TransportCompany[]> {
    return this.transportCompanyRepository.find();
  }

  async findOne(id: number): Promise<TransportCompany> {
    const transportCompany = await this.transportCompanyRepository.findOne({
      where: { id },
    });

    if (!transportCompany) {
      throw new NotFoundException(`The transport company ${id} was not found`);
    }

    return transportCompany;
  }

  create(payload: CreateTransportCompany): Promise<TransportCompany> {
    const newTransportCompany = this.transportCompanyRepository.create(payload);

    return this.transportCompanyRepository.save(newTransportCompany);
  }

  async update(
    id: number,
    payload: UpdateTransportCompany,
  ): Promise<TransportCompany> {
    const transportCompany = await this.findOne(id);
    this.transportCompanyRepository.merge(transportCompany, payload);
    return this.transportCompanyRepository.save(transportCompany);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.transportCompanyRepository.delete(id);
  }
}
