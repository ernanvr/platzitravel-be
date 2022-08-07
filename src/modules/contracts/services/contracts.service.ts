import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Contract } from '../entities/contracts.entity';
import { CreateContractDto, UpdateContractDto } from '../dtos/contracts.dto';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contract)
    private contractRepository: Repository<Contract>,
  ) {}

  findAll(): Promise<Contract[]> {
    return this.contractRepository.find();
  }

  async findOne(id: number): Promise<Contract> {
    const contract = await this.contractRepository.findOne({
      where: { id },
    });

    if (!contract) {
      throw new NotFoundException(`Contract ${id} wasn't found`);
    }

    return contract;
  }

  create(payload: CreateContractDto): Promise<Contract> {
    const newContract = this.contractRepository.create(payload);
    return this.contractRepository.save(newContract);
  }

  async update(id: number, payload: UpdateContractDto): Promise<Contract> {
    const contract = await this.findOne(id);
    this.contractRepository.merge(contract, payload);
    return this.contractRepository.save(contract);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.contractRepository.softDelete(id);
  }
}
