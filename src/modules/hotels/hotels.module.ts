import { Module } from '@nestjs/common';
import { HotelsService } from './services/hotels.service';
import { HotelsController } from './controllers/hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  providers: [HotelsService],
  controllers: [HotelsController],
})
export class HotelsModule {}
