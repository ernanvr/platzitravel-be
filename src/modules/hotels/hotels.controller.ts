import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller('hotels')
export class HotelsController {
  @Get()
  findAll() {
    return {};
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}
