import { Controller, Get, Param } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  @Get()
  getAll() {
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
