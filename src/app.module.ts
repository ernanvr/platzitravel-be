import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './controllers/customers.controller';
import { AgentsController } from './controllers/agents.controller';
import { CustomersService } from './services/customers.service';

@Module({
  imports: [],
  controllers: [AppController, CustomersController, AgentsController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
