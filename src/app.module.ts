import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentsController } from './controllers/agents.controller';
import { CustomersService } from './customers/services/customers.service';
import { CustomersModule } from './customers/customers.module';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [CustomersModule, AgentsModule],
  controllers: [AppController, AgentsController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
