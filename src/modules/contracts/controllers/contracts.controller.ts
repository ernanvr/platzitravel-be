import { Controller } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateContractDto, UpdateContractDto } from '../dtos/contracts.dto';
import { Contract } from '../entities/contracts.entity';
import { ContractsService } from '../services/contracts.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contracts')
@Controller('contracts')
export class ContractsController {
  constructor(private contractsService: ContractsService) {}

  findAll(): Promise<Contract[]> {
    return this.contractsService.findAll();
  }

  findOne(id: number): Promise<Contract> {
    return this.contractsService.findOne(id);
  }

  create(payload: CreateContractDto): Promise<Contract> {
    return this.contractsService.create(payload);
  }

  async update(id: number, payload: UpdateContractDto): Promise<Contract> {
    return this.contractsService.update(id, payload);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.contractsService.delete(id);
  }
}
