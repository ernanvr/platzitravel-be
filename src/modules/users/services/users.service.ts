import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/users.entity';
import { Repository, Not, IsNull } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: {
        agent: true,
        customer: true,
      },
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  checkIfUserWasSoftDeleted(email: string): Promise<User> {
    return this.userRepository.findOne({
      relations: {
        agent: true,
      },
      where: { email, deletedAt: Not(IsNull()) },
      withDeleted: true,
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: {
        agent: true,
        customer: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User ${id} wasn't found`);
    }

    return user;
  }

  async create(payload: CreateUserDto) {
    //1. Import agent creation from AgentsService

    const newUser = this.userRepository.create(payload);
    const hashPass = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPass;
    try {
      await this.userRepository.save(newUser);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Duplicated values');
      }
      console.log(`Error code ${error.code}. Error message ${error.message}`);
      throw new ConflictException(`${error.message}`);
    }

    // const newAgent = this.agentService.createWithUser(agentPayload, newUser);

    return newUser;
  }

  async update(id: number, payload: UpdateUserDto): Promise<User> {
    const response = await this.findOne(id);
    this.userRepository.merge(response, payload);
    return this.userRepository.save(response);
  }

  async delete(id: number) {
    await this.findOne(id);
    return this.userRepository.softDelete(id);
  }

  async restore(id: number) {
    return await this.userRepository.restore(id);
  }
}
