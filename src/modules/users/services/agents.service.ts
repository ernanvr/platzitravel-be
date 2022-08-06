import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateAgentDto, UpdateAgentDto } from '../dtos/agents.dtos';
import { Agent } from '../entities/agents.entity';

@Injectable()
export class AgentsService {
  constructor(@InjectRepository(Agent) private agentRepo: Repository<Agent>) {}

  findAll(): Promise<Agent[]> {
    return this.agentRepo.find();
  }

  findOne(id: number): Promise<Agent> {
    const agent = this.agentRepo.findOne({
      where: { id },
    });

    if (!agent) {
      throw new NotFoundException(`Element ${id} wasn't found`);
    }

    return agent;
  }

  create(payload: CreateAgentDto): Promise<Agent> {
    const newAgent = this.agentRepo.create(payload);
    return this.agentRepo.save(newAgent);
  }

  async update(id: number, payload: UpdateAgentDto): Promise<Agent> {
    const agent = await this.findOne(id);
    this.agentRepo.merge(agent, payload);
    return this.agentRepo.save(agent);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.agentRepo.delete(id);
  }
}
