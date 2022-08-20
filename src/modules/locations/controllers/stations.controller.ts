import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateStationDto, UpdateStationDto } from '../dtos/stations.dto';
import { Station } from '../entities/stations.entity';
import { StationsService } from '../services/stations.service';

@Controller('stations')
export class StationsController {
  constructor(private stationsService: StationsService) {}

  @Get()
  getAll(): Promise<Station[]> {
    return this.stationsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Station> {
    return this.stationsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateStationDto): Promise<Station> {
    return this.stationsService.create(payload);
  }

  @Put('id')
  update(
    @Body() payload: UpdateStationDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Station> {
    return this.stationsService.update(id, payload);
  }

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.stationsService.delete(id);
  }
}
