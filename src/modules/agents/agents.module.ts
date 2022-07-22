import { Module } from '@nestjs/common';
import { AgentsController } from './agents.controller';

@Module({
  controllers: [AgentsController],
  providers: [],
})
export class AgentsModule {}
