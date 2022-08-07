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
import {
  CreateHotelProductDto,
  UpdateHotelProductDto,
} from '../dtos/hotel-products.dtos';
import { HotelProduct } from '../entities/hotel-products.entity';
import { HotelProductsService } from '../services/hotel-products.service';

@Controller('hotel-products')
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
  create(@Body() payload: CreateHotelProductDto) {
    return this.hotelProductService.create(payload);
  }

  @Put('id')
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
