import {
  Controller,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateHotelProductDto,
  UpdateHotelProductDto,
} from '../dtos/hotel-products.dto';
import { HotelProduct } from '../entities/hotel-products.entity';
import { HotelProductsService } from '../services/hotel-products.service';

@ApiTags('Hotel products')
@Controller({
  path: 'hotel-products',
  version: '1',
})
export class HotelProductsController {
  constructor(private hotelProductService: HotelProductsService) {}

  @Get()
  getAll(): Promise<HotelProduct[]> {
    return this.hotelProductService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<HotelProduct> {
    return this.hotelProductService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateHotelProductDto): Promise<HotelProduct> {
    return this.hotelProductService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateHotelProductDto,
  ): Promise<HotelProduct> {
    return this.hotelProductService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.hotelProductService.delete(id);
  }
}
