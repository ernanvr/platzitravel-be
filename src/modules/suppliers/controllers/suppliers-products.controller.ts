import {
  Controller,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateSupplierProductDto,
  UpdateSupplierProductDto,
} from '../dtos/supplier-products.dto';
import { SupplierProduct } from '../entities/supplier-products.entity';
import { SupplierProductsService } from '../services/supplier-products.service';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Supplier products')
@Controller({
  path: 'supplier-products',
  version: '1',
})
export class SupplierProductsController {
  constructor(private supplierProductService: SupplierProductsService) {}

  @Get()
  getAll(): Promise<SupplierProduct[]> {
    return this.supplierProductService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<SupplierProduct> {
    return this.supplierProductService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateSupplierProductDto): Promise<SupplierProduct> {
    return this.supplierProductService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSupplierProductDto,
  ): Promise<SupplierProduct> {
    return this.supplierProductService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.supplierProductService.delete(id);
  }
}
