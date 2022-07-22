import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { Response } from 'express';
import { CustomersService } from 'src/modules/customers/customers.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/modules/customers/dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(@Res() response: Response) {
    response.status(200).send(this.customersService.findAll());
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getId(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findOne(id);
    return customer;
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  updateCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.delete(id);
  }
}
