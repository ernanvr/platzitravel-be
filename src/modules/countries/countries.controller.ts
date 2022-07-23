import { Controller, Get, Param } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
  @Get()
  getAll() {
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return { id };
  }
}
