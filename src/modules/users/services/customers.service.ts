import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/modules/users/entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
  ) {}

  findAll() {
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

  create(payload: CreateCustomerDto) {
    const newCustomer = this.customerRepo.create(payload);
    return this.customerRepo.save(newCustomer);
  }

  async update(id: number, payload: any) {
    const response = await this.findOne(id);
    this.customerRepo.merge(response, payload);
    return this.customerRepo.save(response);
  }

  async delete(id: number) {
    await this.findOne(id);
    await this.customerRepo.delete(id);
    return true;
  }
}
