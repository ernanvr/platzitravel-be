import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { CreateRoomType, UpdateRoomType } from '../dtos/room-types.dto';
import { RoomType } from '../entities/room-types.entity';
import { RoomTypesService } from '../services/room-types.service';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Room types')
@Controller({
  path: 'room-types',
  version: '1',
})
export class RoomTypesController {
  constructor(private roomTypeService: RoomTypesService) {}

  @Get()
  getAll(): Promise<RoomType[]> {
    return this.roomTypeService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<RoomType> {
    return this.roomTypeService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateRoomType): Promise<RoomType> {
    return this.roomTypeService.create(payload);
  }

  @Put('id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateRoomType,
  ): Promise<RoomType> {
    return this.roomTypeService.update(id, payload);
  }

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.roomTypeService.delete(id);
  }
}
