import { Module } from '@nestjs/common';
import { AgentsController } from './controllers/agents.controller';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { AgentsService } from './services/agents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customers.entity';
import { Agent } from './entities/agents.entity';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { User } from './entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Agent, User])],
  controllers: [AgentsController, CustomersController, UsersController],
  providers: [CustomersService, AgentsService, UsersService],
})
export class UsersModule {}
