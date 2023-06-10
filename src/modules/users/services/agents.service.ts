import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateAgentDto } from '../dtos/agents.dto';
import { CreateRelatedUserDto } from '../dtos/users.dto';
import { Agent } from '../entities/agents.entity';
import { User } from '../entities/users.entity';
import { UsersService } from './users.service';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent) private agentRepository: Repository<Agent>,
    private usersService: UsersService,
  ) {}

  findAll(): Promise<Agent[]> {
    return this.agentRepository.find({
      relations: {
        user: true,
      },
    });
  }

  async findOne(id: number): Promise<Agent> {
    const agent = await this.agentRepository.findOne({
      where: { id },
      relations: {
        user: true,
      },
    });

    if (!agent) {
      throw new NotFoundException(`Agent ${id} wasn't found`);
    }

    return agent;
  }

  async create(payload: CreateRelatedUserDto): Promise<Agent> {
    //check if email is duplicated
    const { email } = payload;
    const existingUser: User = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException(`${email} is duplicated`);
    }

    //check if email was softremoved
    const existingDeletedUser: User =
      await this.usersService.checkIfUserWasSoftDeleted(email);
    let restoredUser;

    if (existingDeletedUser) {
      restoredUser = await this.usersService.restore(existingDeletedUser.id);
      throw new ConflictException(`${email} was restored`);
    }

    //initiating user creation
    const userPayload: { email: string; password: string; role: string } =
      payload;

    const user = await this.usersService.create(userPayload);

    //initiating agent creation
    const agentPayload = payload.agent;
    let newAgent: Agent;
    try {
      newAgent = this.agentRepository.create(agentPayload);
    } catch (error) {
      console.log(`Error code ${error.code}. Error message ${error.message}`);
      throw new ConflictException(`${error.message}`);
    }
    newAgent.user = user;

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
