import { Module } from '@nestjs/common';
import { AgentsController } from './controllers/agents.controller';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { AgentsService } from './services/agents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Agent } from './entities/agents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Agent])],
  controllers: [AgentsController, CustomersController],
  providers: [CustomersService, AgentsService],
})
export class UsersModule {}
