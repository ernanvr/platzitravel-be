import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import {
  CreateTicketTypeDto,
  UpdateTicketTypeDto,
} from '../dtos/ticket-types.dto';
import { TicketType } from '../entities/ticket-types.entity';
import { TicketTypesService } from '../services/ticket-types.service';

@ApiTags('Ticket types')
@Controller('ticket-types')
export class TicketTypesController {
  constructor(private ticketTypesService: TicketTypesService) {}

  @Get()
  findAll(): Promise<TicketType[]> {
    return this.ticketTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<TicketType> {
    return this.ticketTypesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateTicketTypeDto): Promise<TicketType> {
    return this.ticketTypesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTicketTypeDto,
  ): Promise<TicketType> {
    return this.ticketTypesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.ticketTypesService.delete(id);
  }
}
