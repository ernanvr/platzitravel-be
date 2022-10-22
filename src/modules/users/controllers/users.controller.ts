import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { User } from '../entities/users.entity';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { ApiTags } from '@nestjs/swagger';
import { UseInterceptors } from '@nestjs/common';

@ApiTags('Users')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() payload: CreateUserDto): Promise<User> {
    return this.usersService.create(payload);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
