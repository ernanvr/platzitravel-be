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
import { AgentsService } from '../services/agents.service';
import { Agent } from '../entities/agents.entity';
import { CreateAgentDto, UpdateAgentDto } from '../dtos/agents.dto';
import { DeleteResult } from 'typeorm';

@Controller('agents')
export class AgentsController {
  constructor(private agentService: AgentsService) {}

  @Get()
  getAllAgents(): Promise<Agent[]> {
    return this.agentService.findAll();
  }

  @Get(':id')
  getAgent(@Param('id', ParseIntPipe) id: number): Promise<Agent> {
    return this.agentService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateAgentDto): Promise<Agent> {
    return this.agentService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateAgentDto,
  ): Promise<Agent> {
    return this.agentService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.agentService.delete(id);
  }
}
