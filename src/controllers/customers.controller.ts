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
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(@Res() response: Response) {
    response.status(200).send(this.customersService.findAll());
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getId(@Res() response: Response, @Param('id') id: number) {
    const customer = this.customersService.findOne(id);
    response.send(customer);
  }

  @Post()
  create(@Body() payload: any) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  updateCustomer(@Param('id') id: number, @Body() payload: any) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.customersService.delete(id);
  }
}
