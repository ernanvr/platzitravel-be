import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CountriesService } from '../services/countries.service';
import { CreateCountryDto, UpdateCountryDto } from '../dtos/countries.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Countries')
@Controller({
  path: 'countries',
  version: '1',
})
export class CountriesController {
  constructor(private countryService: CountriesService) {}

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.findOne(id);
  }

  @Post()
  createCountry(@Body() payload: CreateCountryDto) {
    return this.countryService.create(payload);
  }

  @Put(':id')
  updateCountry(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCountryDto,
  ) {
    return this.countryService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.delete(id);
  }
}
