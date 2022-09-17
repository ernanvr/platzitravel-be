import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { Customer } from '../entities/customer.entity';
import { CustomersService } from 'src/modules/users/services/customers.service';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/modules/users/dtos/customers.dto';

@ApiTags('Customers')
@Controller({
  path: 'customers',
  version: '1',
})
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  getId(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.customersService.delete(id);
  }
}
