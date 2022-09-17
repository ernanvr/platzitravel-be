import {
  ParseIntPipe,
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import {
  CreateOfferTransportProductDto,
  UpdateOfferTransportProductDto,
} from '../dtos/offer-transport-products.dto';
import { OfferTransportProduct } from '../entities/offer-transport-products.entity';
import { OfferTransportProductsService } from '../services/offer-transport-products.service';

@ApiTags('Offer transport products')
@Controller({
  path: 'offer-transport-products',
  version: '1',
})
export class OfferTransportProductsController {
  constructor(
    private offerTransportProductsService: OfferTransportProductsService,
  ) {}

  @Get()
  getAll(): Promise<OfferTransportProduct[]> {
    return this.offerTransportProductsService.findAll();
  }

  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OfferTransportProduct> {
    return this.offerTransportProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreateOfferTransportProductDto,
  ): Promise<OfferTransportProduct> {
    return this.offerTransportProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOfferTransportProductDto,
  ): Promise<OfferTransportProduct> {
    return this.offerTransportProductsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.offerTransportProductsService.delete(id);
  }
}
