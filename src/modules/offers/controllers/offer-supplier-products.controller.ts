import {
  ParseIntPipe,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { OfferSupplierProduct } from '../entities/offer-supplier-products.entity';
import { OfferSupplierProductsService } from '../services/offer-supplier-products.service';
import {
  CreateOfferSupplierProductDto,
  UpdateOfferSupplierProductDto,
} from '../dtos/offer-supplier-products.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../../auth/guards/roles.guard";

@UseGuards(JwtAuthGuard,RolesGuard)
@ApiTags('Offer Supplier products')
@Controller({
  path: 'offer-supplier-products',
  version: '1',
})
export class OfferSupplierProductsController {
  constructor(
    private offerSupplierProductsService: OfferSupplierProductsService,
  ) {}

  @Get()
  getAll(): Promise<OfferSupplierProduct[]> {
    return this.offerSupplierProductsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<OfferSupplierProduct> {
    return this.offerSupplierProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreateOfferSupplierProductDto,
  ): Promise<OfferSupplierProduct> {
    return this.offerSupplierProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOfferSupplierProductDto,
  ): Promise<OfferSupplierProduct> {
    return this.offerSupplierProductsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.offerSupplierProductsService.delete(id);
  }
}
