import {
  ParseIntPipe,
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { CreateOfferDto, UpdateOfferDto } from '../dtos/offers.dto';
import { Offer } from '../entities/offers.entity';
import { OffersService } from '../services/offers.service';

@ApiTags('Offers')
@Controller({
  path: 'offers',
  version: '1',
})
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  getAll(): Promise<Offer[]> {
    return this.offersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Offer> {
    return this.offersService.findOne(id);
  }

  @Post(':id')
  create(@Body() payload: CreateOfferDto): Promise<Offer> {
    return this.offersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOfferDto,
  ): Promise<Offer> {
    return this.offersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.offersService.delete(id);
  }
}
