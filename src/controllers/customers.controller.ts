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

@Controller('customers')
export class CustomersController {
  @Get()
  getAll(@Res() response: Response) {
    response.status(200).send({
      message: 'array of customers',
    });
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getId(@Res() response: Response, @Param('id') id: string) {
    return {
      message: response,
      id,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'action of creating',
      payload,
    };
  }

  @Put(':id')
  updateCustomer(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Customer ${id} has been deleted`,
    };
  }
}
