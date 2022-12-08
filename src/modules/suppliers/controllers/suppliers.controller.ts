import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { DeleteResult } from 'typeorm';

import { CreateSupplierDto, UpdateSupplierDto } from '../dtos/suppliers.dto';
import { Supplier } from '../entities/suppliers.entity';
import { SuppliersService } from '../services/suppliers.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Suppliers')
@Controller({
  path: 'suppliers',
  version: '1',
})
export class SuppliersController {
  constructor(private supplierService: SuppliersService) {}

  @Public()
  @Get()
  findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Supplier> {
    return this.supplierService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateSupplierDto): Promise<Supplier> {
    return this.supplierService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSupplierDto,
  ): Promise<Supplier> {
    return this.supplierService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.supplierService.delete(id);
  }
}
