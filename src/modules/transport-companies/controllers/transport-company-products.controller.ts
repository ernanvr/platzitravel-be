import {
  Controller,
  Get,
  Post,
  Put,
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
  CreateTransportCompanyProductDto,
  UpdateTransportCompanyProductDto,
} from '../dtos/transport-company-products.dto';
import { TransportCompanyProduct } from '../entities/transport-company-products.entity';
import { TransportCompanyProductsService } from '../services/transport-company-products.service';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Transport company products')
@Controller({
  path: 'transport-company-products',
  version: '1',
})
export class TransportCompanyProductsController {
  constructor(
    private transportCompanyProductsService: TransportCompanyProductsService,
  ) {}

  @Get()
  getAll(): Promise<TransportCompanyProduct[]> {
    return this.transportCompanyProductsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TransportCompanyProduct> {
    return this.transportCompanyProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreateTransportCompanyProductDto,
  ): Promise<TransportCompanyProduct> {
    return this.transportCompanyProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTransportCompanyProductDto,
  ): Promise<TransportCompanyProduct> {
    return this.transportCompanyProductsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.transportCompanyProductsService.delete(id);
  }
}
