import { Controller, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContractDto, UpdateContractDto } from '../dtos/contracts.dto';
import { Contract } from '../entities/contracts.entity';

@Controller('contracts')
export class ContractsController {
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
      throw new NotFoundException(`Id ${id} wasn't found`);
    }

    return contract;
  }

  create(payload: CreateContractDto) {
    const newContract = this.contractRepo.create(payload);
    return this.contractRepo.save(newContract);
  }

  async update(id: number, payload: UpdateContractDto) {
    const contract = await this.findOne(id);
    this.contractRepo.merge(contract, payload);
    return this.contractRepo.save(contract);
  }

  async delete(id: number) {
    await this.findOne(id);
    await this.contractRepo.delete(id);
    return true;
  }
}
