import { Module } from '@nestjs/common';
import { OffersService } from './services/offers.service';
import { OffersController } from './controllers/offers.controller';

@Module({
  providers: [OffersService],
  controllers: [OffersController],
})
export class OffersModule {}
