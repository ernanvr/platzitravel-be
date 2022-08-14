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
import { PromoHotelProductsService } from '../services/promo-hotel-products.service';
import { PromoOfferHotelProduct } from '../entities/promo-offer-hotel-products.entity';
import {
  CreatePromoOfferHotelProductDto,
  UpdatePromoOfferHotelProductDto,
} from '../dtos/promo-offers-hotel-products.dtos';
import { DeleteResult } from 'typeorm';

@Controller('promo-hotel-products')
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
