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
import {
  CreateTicketTypeDto,
  UpdateTicketTypeDto,
} from '../dtos/ticket-types.dtos';
import { TicketType } from '../entities/ticket-types.entity';
import { DeleteResult } from 'typeorm';
import { TicketTypesService } from '../services/ticket-types.service';

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
