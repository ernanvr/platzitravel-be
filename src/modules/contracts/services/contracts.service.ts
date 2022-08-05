import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from '../entities/contracts.entity';
import { CreateContractDto, UpdateContractDto } from '../dtos/contracts.dto';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contract) private contractRepo: Repository<Contract>,
  ) {}

  findAll() {
    return this.contractRepo.find();
  }

  findOne(id: number) {
    const contract = this.contractRepo.findOne({
      where: { id },
    });

    if (!contract) {
      throw new NotFoundException(`Record ${id} wasn't found`);
    }

    return contract;
  }

  create(payload: CreateContractDto) {
    const newContract = this.contractRepo.create(payload);
    return this.contractRepo.save(newContract);
  }

  async update(id: number, payload: UpdateContractDto) {
    const contract = await this.contractRepo.findOne({
      where: { id },
    });
    if (!contract) {
      throw new NotFoundException(`Record ${id} wasn't found`);
    }
    this.contractRepo.merge(contract, payload);

    return this.contractRepo.save(contract);
  }

  async delete(id: number) {
    const contract = await this.contractRepo.findOne({
      where: { id },
    });
    if (!contract) {
      throw new NotFoundException(`Record ${id} wasn't found`);
    }
    this.contractRepo.delete(id);
    return true;
  }
}
