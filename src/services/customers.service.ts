import { Injectable } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find((c) => c.id === id);
  }

  create(payload: any) {
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.counterId++;
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: any) {
    let customer = this.findOne(id);
    if (customer) {
      customer = {
        ...payload,
      };
    }
    return customer;
  }
}
