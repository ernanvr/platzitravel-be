import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import {
  CreateCompanyTypeDto,
  UpdateCompanyTypeDto,
} from '../dtos/company-types.dtos';
import { CompanyType } from '../entities/company-types.entity';
import { CompanyTypesService } from '../services/company-types.service';
import { DeleteResult } from 'typeorm';

@Controller('company-types')
export class CompanyTypesController {
  constructor(private companyTypesService: CompanyTypesService) {}

  @Get()
  findAll(): Promise<CompanyType[]> {
    return this.companyTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CompanyType> {
    return this.companyTypesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCompanyTypeDto): Promise<CompanyType> {
    return this.companyTypesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCompanyTypeDto,
  ): Promise<CompanyType> {
    return this.companyTypesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.companyTypesService.delete(id);
  }
}
