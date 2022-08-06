import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  // Res,
  // HttpCode,
  // HttpStatus,
} from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
// import { Response } from 'express';
import { CustomersService } from 'src/modules/users/services/customers.service';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/modules/users/dtos/customers.dtos';
import { DeleteResult } from 'typeorm';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }
  // getAll(@Res() response: Response): Promise<Customer[]> {
  //   response.status(200).send(this.customersService.findAll());
  // }

  @Get(':id')
  // @HttpCode(HttpStatus.ACCEPTED)
  getId(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    const customer = this.customersService.findOne(id);
    return customer;
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
