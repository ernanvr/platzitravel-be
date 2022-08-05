import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from '../entities/agents.entity';

@Injectable()
export class AgentsService {
  constructor(@InjectRepository(Agent) private agentRepo: Repository<Agent>) {}

  findAll() {
    return this.agentRepo.find();
  }

  findOne(id: number) {
    const agent = this.agentRepo.findOne({
      where: { id },
    });

    if (!agent) {
      throw new NotFoundException(`Element ${id} wasn't found`);
    }

    return agent;
  }
}
