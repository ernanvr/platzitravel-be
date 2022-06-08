import { Injectable } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Ernan',
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
    const response = this.customers.find((c) => c.id === Number(id));
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
    const i = this.customers.findIndex((e) => e.id === Number(id));
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
    const customer = this.findOne(Number(id));
    if (!customer) {
      throw new Error(`Id ${id} does not exist`);
    }
    const customers = this.customers.filter((customer) => customer.id !== id);
    this.customers = customers;
  }
}
