import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { PromoTransportProductsService } from '../services/promo-transport-products.service';
import { DeleteResult } from 'typeorm';
import { PromoOfferTransportProduct } from '../entities/promo-offer-transport-products.entity';
import {
  CreatePromoOfferTransportProductDto,
  UpdatePromoOfferTransportProductDto,
} from '../dtos/promo-offers-transport-products.dto';

@Controller('promo-transport-products')
export class PromoTransportProductsController {
  constructor(
    private promoTransportProductsService: PromoTransportProductsService,
  ) {}

  @Get()
  getAll(): Promise<PromoOfferTransportProduct[]> {
    return this.promoTransportProductsService.findAll();
  }

  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PromoOfferTransportProduct> {
    return this.promoTransportProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreatePromoOfferTransportProductDto,
  ): Promise<PromoOfferTransportProduct> {
    return this.promoTransportProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePromoOfferTransportProductDto,
  ): Promise<PromoOfferTransportProduct> {
    return this.promoTransportProductsService.udpate(id, payload);
  }

  @Delete(':id')
  delete(id: number): Promise<DeleteResult> {
    return this.promoTransportProductsService.delete(id);
  }
}
