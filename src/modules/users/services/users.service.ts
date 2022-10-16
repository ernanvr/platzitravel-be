import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  create(payload: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(payload);
    return this.userRepository.save(newUser);
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
}
