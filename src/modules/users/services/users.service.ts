import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User ${id} wasn't found`);
    }

    return user;
  }

  async create(payload: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(payload);
    const hashPass = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPass;
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
