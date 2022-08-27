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
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import {
  CreatePromoOfferDto,
  UpdatePromoOfferDto,
} from '../dtos/promo-offers.dto';
import { PromoOffer } from '../entities/promo-offers.entity';
import { PromosService } from '../services/promos.service';

@ApiTags('Promo offers')
@Controller('promos')
export class PromosController {
  constructor(private promosService: PromosService) {}

  @Get()
  getAll(): Promise<PromoOffer[]> {
    return this.promosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<PromoOffer> {
    return this.promosService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreatePromoOfferDto): Promise<PromoOffer> {
    return this.promosService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdatePromoOfferDto,
  ): Promise<PromoOffer> {
    return this.promosService.udpate(id, payload);
  }

  @Delete(':id')
  delete(id: number): Promise<DeleteResult> {
    return this.promosService.delete(id);
  }
}
