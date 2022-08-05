import {
  Controller,
  Param,
  Get,
  Body,
  Put,
  Post,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CitiesService } from '../services/cities.service';
import { CreateCityDto, UpdateCityDto } from '../dtos/cities.dtos';

@Controller('cities')
export class CitiesController {
  constructor(private cityService: CitiesService) {}

  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.findOne(id);
  }

  @Post()
  createCountry(@Body() payload: CreateCityDto) {
    return this.cityService.create(payload);
  }

  @Put(':id')
  updateCity(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCityDto,
  ) {
    return this.cityService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.cityService.delete(id);
  }
}