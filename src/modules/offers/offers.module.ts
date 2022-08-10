import { Module } from '@nestjs/common';
import { OffersService } from './services/offers.service';
import { OffersController } from './controllers/offers.controller';
import { OfferTransportProductsController } from './controllers/offer-transport-products.controller';
import { OfferTransportProductsService } from './services/offer-transport-products.service';
import { OfferHotelProductsController } from './controllers/offer-hotel-products.controller';
import { OfferHotelProductsService } from './services/offer-hotel-products.service';

@Module({
  providers: [
    OfferHotelProductsService,
    OffersService,
    OfferTransportProductsService,
  ],
  controllers: [
    OfferHotelProductsController,
    OffersController,
    OfferTransportProductsController,
  ],
})
export class OffersModule {}
