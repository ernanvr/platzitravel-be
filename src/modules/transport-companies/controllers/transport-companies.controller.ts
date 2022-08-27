import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import {
  CreateTransportCompanyDto,
  UpdateTransportCompanyDto,
} from '../dtos/transport-companies.dto';
import { TransportCompaniesService } from '../services/transport-companies.service';
import { TransportCompany } from '../entities/transport-companies.entity';

@ApiTags('Transport companies')
@Controller('transport-companies')
export class TransportCompaniesController {
  constructor(private transportCompaniesService: TransportCompaniesService) {}

  @Get()
  findAll(): Promise<TransportCompany[]> {
    return this.transportCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<TransportCompany> {
    return this.transportCompaniesService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreateTransportCompanyDto,
  ): Promise<TransportCompany> {
    return this.transportCompaniesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTransportCompanyDto,
  ): Promise<TransportCompany> {
    return this.transportCompaniesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.transportCompaniesService.delete(id);
  }
}
