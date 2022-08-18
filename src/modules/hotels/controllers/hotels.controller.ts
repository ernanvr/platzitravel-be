import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateHotelDto, UpdateHotelDto } from '../dtos/hotels.dto';
import { Hotel } from '../entities/hotels.entity';
import { HotelsService } from '../services/hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelService: HotelsService) {}
  @Get()
  findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Hotel> {
    return this.hotelService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateHotelDto): Promise<Hotel> {
    return this.hotelService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateHotelDto,
  ): Promise<Hotel> {
    return this.hotelService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.hotelService.delete(id);
  }
}
