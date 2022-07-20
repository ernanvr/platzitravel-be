import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('agents')
export class AgentsController {
  @Get()
  getAllAgents() {
    return {};
  }

  @Get(':id')
  getAgent(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'created',
      payload,
    };
  }

  @Put()
  update(@Param('id') id: string) {
    return { id };
  }

  @Delete()
  delete(@Param('id') id: string) {
    return { id };
  }
}
