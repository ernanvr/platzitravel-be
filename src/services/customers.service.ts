import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      firstname: 'Ernan',
      lastname: 'Velasquez',
      address:
        'Pasaje Amapolas, Poligono I, Casa#12, Jardines del Rey, Santa Tecla',
      phone: '7566-5962',
      mobile: '-',
      email: 'ernanvr@gmail.com',
      details: '',
      customer_from: '',
    },
  ];
  private counterId = this.customers[this.customers.length - 1].id;

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const response = this.customers.find((c) => c.id === id);
    if (!response) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    return response;
  }

  create(payload: any) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: any) {
    const i = this.customers.findIndex((e) => e.id === id);
    if (!i) {
      throw new NotFoundException(`Customer ${id} not found`);
    }
    const customer = this.customers[i];

    if (customer) {
      this.customers[i] = {
        ...customer,
        ...payload,
      };
    }

    return this.customers[i];
  }

  delete(id: number) {
    const customer = this.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Id ${id} does not exist`);
    }
    this.customers = this.customers.filter((customer) => customer.id !== id);
    return true;
  }
}
