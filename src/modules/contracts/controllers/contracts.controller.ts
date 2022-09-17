import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateContractDto, UpdateContractDto } from '../dtos/contracts.dto';
import { Contract } from '../entities/contracts.entity';
import { ContractsService } from '../services/contracts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contracts')
@Controller({
  path: 'contracts',
  version: '1',
})
export class ContractsController {
  constructor(private contractsService: ContractsService) {}

  @Get()
  findAll(): Promise<Contract[]> {
    return this.contractsService.findAll();
  }

  @Get(':id')
  findOne(id: number): Promise<Contract> {
    return this.contractsService.findOne(id);
  }

  @Post()
  create(payload: CreateContractDto): Promise<Contract> {
    return this.contractsService.create(payload);
  }

  @Put(':id')
  async update(id: number, payload: UpdateContractDto): Promise<Contract> {
    return this.contractsService.update(id, payload);
  }

  @Delete(':id')
  async delete(id: number): Promise<DeleteResult> {
    return this.contractsService.delete(id);
  }
}
