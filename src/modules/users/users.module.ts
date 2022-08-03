import { Module } from '@nestjs/common';
import { AgentsController } from './controllers/agents.controller';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { AgentsService } from './services/agents.service';

@Module({
  controllers: [AgentsController, CustomersController],
  providers: [CustomersService, AgentsService],
})
export class UsersModule {}
