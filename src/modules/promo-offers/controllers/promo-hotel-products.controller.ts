import {
  Controller,
  Param,
  Body,
  Get,
  Put,
  Post,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PromoHotelProductsService } from '../services/promo-hotel-products.service';
import { PromoOfferHotelProduct } from '../entities/promo-offer-hotel-products.entity';
import {
  CreatePromoOfferHotelProductDto,
  UpdatePromoOfferHotelProductDto,
} from '../dtos/promo-offers-hotel-products.dto';
import { DeleteResult } from 'typeorm';

@ApiTags('Promo offer hotel products')
  @Controller({
    path: 'promo-hotel-products',
    version: '1'
})
export class PromoHotelProductsController {
  constructor(private promoHotelProductsService: PromoHotelProductsService) {}

  @Get()
  getAll(): Promise<PromoOfferHotelProduct[]> {
    return this.promoHotelProductsService.findAll();
  }

  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PromoOfferHotelProduct> {
    return this.promoHotelProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreatePromoOfferHotelProductDto,
  ): Promise<PromoOfferHotelProduct> {
    return this.promoHotelProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePromoOfferHotelProductDto,
  ): Promise<PromoOfferHotelProduct> {
    return this.promoHotelProductsService.udpate(id, payload);
  }

  @Delete(':id')
  delete(id: number): Promise<DeleteResult> {
    return this.promoHotelProductsService.delete(id);
  }
}
