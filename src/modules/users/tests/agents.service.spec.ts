import { Test, TestingModule } from '@nestjs/testing';
import { AgentsService } from '../services/agents.service';

describe('AgentsService', () => {
  let agentsService: AgentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentsService],
    }).compile();

    agentsService = module.get<AgentsService>(AgentsService);
  });

  it('should be defined', () => {
    expect(agentsService).toBeDefined();
  });
});
