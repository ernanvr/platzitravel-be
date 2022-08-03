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
import { CreateHotelDto, UpdateHotelDto } from '../dtos/hotels.dtos';
import { HotelsService } from '../services/hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelService: HotelsService) {}
  @Get()
  findAll() {
    return {};
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return { id };
  }

  @Post()
  create(@Body() payload: CreateHotelDto) {
    return this.hotelService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateHotelDto,
  ) {
    this.hotelService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.hotelService.delete(id);
  }
}
