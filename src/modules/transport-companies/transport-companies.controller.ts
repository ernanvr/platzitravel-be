import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTransportCompany } from './dtos/transport-companies.dtos';
import { TransportCompaniesService } from './transport-companies.service';

@Controller('transport-companies')
export class TransportCompaniesController {
  constructor(private transportCompanyService: TransportCompaniesService) {}

  @Get()
  findAll() {
    return this.transportCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transportCompanyService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateTransportCompany) {
    return this.transportCompanyService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: CreateTransportCompany,
  ) {
    return this.transportCompanyService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.transportCompanyService.delete(id);
    return {
      message: `Record ${id} was deleted`,
    };
  }
}
