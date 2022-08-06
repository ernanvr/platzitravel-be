import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Contract } from '../entities/contracts.entity';
import { CreateContractDto, UpdateContractDto } from '../dtos/contracts.dto';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contract) private contractRepo: Repository<Contract>,
  ) {}

  findAll(): Promise<Contract[]> {
    return this.contractRepo.find();
  }

  findOne(id: number): Promise<Contract> {
    const contract = this.contractRepo.findOne({
      where: { id },
    });

    if (!contract) {
      throw new NotFoundException(`Record ${id} wasn't found`);
    }

    return contract;
  }

  create(payload: CreateContractDto): Promise<Contract> {
    const newContract = this.contractRepo.create(payload);
    return this.contractRepo.save(newContract);
  }

  async update(id: number, payload: UpdateContractDto): Promise<Contract> {
    const contract = await this.findOne(id);
    this.contractRepo.merge(contract, payload);
    return this.contractRepo.save(contract);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.contractRepo.delete(id);
  }
}
