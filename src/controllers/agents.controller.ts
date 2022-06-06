import { Controller, Get, Param } from '@nestjs/common';

@Controller('agents')
export class AgentsController {
  @Get()
  getAgents() {
    return 'Array of agents';
  }
}
