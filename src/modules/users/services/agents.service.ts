import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateAgentDto, UpdateAgentDto } from '../dtos/agents.dto';
import { Agent } from '../entities/agents.entity';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent) private agentRepository: Repository<Agent>,
  ) {}

  findAll(): Promise<Agent[]> {
    return this.agentRepository.find();
  }

  async findOne(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findOne({
      where: { id },
    });

    if (!agent) {
      throw new NotFoundException(`Agent ${id} wasn't found`);
    }

    return agent;
  }

  create(payload: CreateAgentDto): Promise<Agent> {
    const newAgent = this.agentRepository.create(payload);
    return this.agentRepository.save(newAgent);
  }

  async update(id: number, payload: UpdateAgentDto): Promise<Agent> {
    const agent = await this.findOne(id);
    this.agentRepository.merge(agent, payload);
    return this.agentRepository.save(agent);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.agentRepository.softDelete(id);
  }
}
