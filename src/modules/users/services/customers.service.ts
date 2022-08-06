import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/modules/users/entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customerRepo.find();
  }

  findOne(id: number): Promise<Customer> {
    const response = this.customerRepo.findOne({
      where: { id },
    });
    if (!response) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return response;
  }

  create(payload: CreateCustomerDto): Promise<Customer> {
    const newCustomer = this.customerRepo.create(payload);
    return this.customerRepo.save(newCustomer);
  }

  async update(id: number, payload: UpdateCustomerDto): Promise<Customer> {
    const response = await this.findOne(id);
    this.customerRepo.merge(response, payload);
    return this.customerRepo.save(response);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findOne(id);
    return this.customerRepo.delete(id);
  }
}
