import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import {
  CreateCompanyTypeDto,
  UpdateCompanyTypeDto,
} from '../dtos/company-types.dto';
import { CompanyType } from '../entities/company-types.entity';

@Injectable()
export class CompanyTypesService {
  constructor(
    @InjectRepository(CompanyType)
    private companyTypeRepository: Repository<CompanyType>,
  ) {}

  findAll(): Promise<CompanyType[]> {
    return this.companyTypeRepository.find();
  }

  async findOne(id: number): Promise<CompanyType> {
    const transportCompany = await this.companyTypeRepository.findOne({
      where: { id },
    });

    if (!transportCompany) {
      throw new NotFoundException(`The transport company ${id} was not found`);
    }

    return transportCompany;
  }

  create(payload: CreateCompanyTypeDto): Promise<CompanyType> {
    const newTransportCompany = this.companyTypeRepository.create(payload);

    return this.companyTypeRepository.save(newTransportCompany);
  }

  async update(
    id: number,
    payload: UpdateCompanyTypeDto,
  ): Promise<CompanyType> {
    const transportCompany = await this.findOne(id);
    this.companyTypeRepository.merge(transportCompany, payload);
    return this.companyTypeRepository.save(transportCompany);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.companyTypeRepository.softDelete(id);
  }
}
