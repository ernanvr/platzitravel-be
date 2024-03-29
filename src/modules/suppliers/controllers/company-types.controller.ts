import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import {
  CreateCompanyTypeDto,
  UpdateCompanyTypeDto,
} from '../dtos/company-types.dto';
import { CompanyType } from '../entities/company-types.entity';
import { CompanyTypesService } from '../services/company-types.service';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Company types')
@Controller({
  path: 'company-types',
  version: '1',
})
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
