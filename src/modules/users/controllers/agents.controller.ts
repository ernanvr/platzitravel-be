import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { Public } from 'src/modules/auth/decorators/public.decorator';
import { AgentsService } from '../services/agents.service';
import { Agent } from '../entities/agents.entity';
import { CreateAgentDto, UpdateAgentDto } from '../dtos/agents.dto';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';

@ApiTags('Agents')
@UseGuards(ApiKeyGuard) //protect all endpoints
@Controller({
  path: 'agents',
  version: '1',
})
export class AgentsController {
  constructor(private agentService: AgentsService) {}

  @Public()
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
