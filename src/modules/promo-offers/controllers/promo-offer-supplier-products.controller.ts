import {
  Controller,
  Param,
  Body,
  Get,
  Put,
  Post,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PromoSupplierProductsService } from '../services/promo-supplier-products.service';
import { PromoOfferSupplierProduct } from '../entities/promo-offer-supplier-products.entity';
import {
  CreatePromoOfferSupplierProductDto,
  UpdatePromoOfferSupplierProductDto,
} from '../dtos/promo-offers-supplier-products.dto';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Promo offer Supplier products')
@Controller({
  path: 'promo-Supplier-products',
  version: '1',
})
export class PromoSupplierProductsController {
  constructor(
    private promoSupplierProductsService: PromoSupplierProductsService,
  ) {}

  @Get()
  getAll(): Promise<PromoOfferSupplierProduct[]> {
    return this.promoSupplierProductsService.findAll();
  }

  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PromoOfferSupplierProduct> {
    return this.promoSupplierProductsService.findOne(id);
  }

  @Post()
  create(
    @Body() payload: CreatePromoOfferSupplierProductDto,
  ): Promise<PromoOfferSupplierProduct> {
    return this.promoSupplierProductsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePromoOfferSupplierProductDto,
  ): Promise<PromoOfferSupplierProduct> {
    return this.promoSupplierProductsService.udpate(id, payload);
  }

  @Delete(':id')
  delete(id: number): Promise<DeleteResult> {
    return this.promoSupplierProductsService.delete(id);
  }
}
