import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { Public } from 'src/modules/auth/decorators/public.decorator';
import { AgentsService } from '../services/agents.service';
import { Agent } from '../entities/agents.entity';
import { UpdateAgentDto } from '../dtos/agents.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/role.models';
import { CreateRelatedUserDto } from '../dtos/users.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('Agents')
@Controller({
  path: 'agents',
  version: '1',
})
export class AgentsController {
  constructor(private agentService: AgentsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Public()
  @Get()
  getAllAgents(): Promise<Agent[]> {
    return this.agentService.findAll();
  }

  @Get(':id')
  getAgent(@Param('id', ParseIntPipe) id: number): Promise<Agent> {
    return this.agentService.findOne(id);
  }

  @Roles(Role.Agent, Role.Admin)
  @Post()
  create(@Body() payload: CreateRelatedUserDto): Promise<Agent> {
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
