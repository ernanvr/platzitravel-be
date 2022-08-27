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

import { StationTypesService } from '../services/station-types.service';
import { StationType } from '../entities/station-types.entity';
import { DeleteResult } from 'typeorm';

import {
  CreateStationTypeDto,
  UpdateStationTypeDto,
} from '../dtos/station-types.dto';

@ApiTags('Station types')
@Controller('station-types')
export class StationTypesController {
  constructor(private stationTypesService: StationTypesService) {}

  @Get()
  getAll(): Promise<StationType[]> {
    return this.stationTypesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<StationType> {
    return this.stationTypesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateStationTypeDto): Promise<StationType> {
    return this.stationTypesService.create(payload);
  }

  @Put('id')
  update(
    @Body() payload: UpdateStationTypeDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<StationType> {
    return this.stationTypesService.update(id, payload);
  }

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.stationTypesService.delete(id);
  }
}
