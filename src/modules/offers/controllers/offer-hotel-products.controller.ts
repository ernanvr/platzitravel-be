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

import { OfferHotelProduct } from '../entities/offer-hotel-products.entity';
import { OfferHotelProductsService } from '../services/offer-hotel-products.service';
import {
  CreateOfferHotelProductDto,
  UpdateOfferHotelProductDto,
} from '../dtos/offer-hotel-products.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Offer hotel products')
@Controller({
  path: 'offer-hotel-products',
  version: '1',
})
export class OfferHotelProductsController {
  constructor(private offerHotelProductsService: OfferHotelProductsService) {}

  @Get()
  getAll(): Promise<OfferHotelProduct[]> {
    return this.offerHotelProductsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<OfferHotelProduct> {
    return this.offerHotelProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreateOfferHotelProductDto,
  ): Promise<OfferHotelProduct> {
    return this.offerHotelProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOfferHotelProductDto,
  ): Promise<OfferHotelProduct> {
    return this.offerHotelProductsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.offerHotelProductsService.delete(id);
  }
}
