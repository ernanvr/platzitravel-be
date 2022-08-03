import { Module } from '@nestjs/common';
import { OffersService } from './services/offers.service';
import { OffersController } from './controllers/offers.controller';
import { PromosService } from './services/promos.service';
import { PromosController } from './controllers/promos.controller';
import { PromoHotelProductsController } from './controllers/promo-hotel-products.controller';
import { PromoHotelProductsService } from './services/promo-hotel-products.service';
import { PromoTransportProductsService } from './services/promo-transport-products.service';
import { PromoTransportProductsController } from './controllers/promo-transport-products.controller';
import { OfferTransportProductsController } from './controllers/offer-transport-products.controller';
import { OfferTransportProductsService } from './services/offer-transport-products.service';
import { OfferHotelProductsController } from './controllers/offer-hotel-products.controller';
import { OfferHotelProductsService } from './services/offer-hotel-products.service';

@Module({
  providers: [
    OfferHotelProductsService,
    OffersService,
    OfferTransportProductsService,
    PromoHotelProductsService,
    PromosService,
    PromoTransportProductsService,
  ],
  controllers: [
    OfferHotelProductsController,
    OffersController,
    OfferTransportProductsController,
    PromoHotelProductsController,
    PromosController,
    PromoTransportProductsController,
  ],
})
export class OffersModule {}
