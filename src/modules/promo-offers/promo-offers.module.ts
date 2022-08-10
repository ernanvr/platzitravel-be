import { Module } from '@nestjs/common';
import { PromosService } from './services/promos.service';
import { PromosController } from './controllers/promos.controller';
import { PromoHotelProductsController } from './controllers/promo-hotel-products.controller';
import { PromoHotelProductsService } from './services/promo-hotel-products.service';
import { PromoTransportProductsService } from './services/promo-transport-products.service';
import { PromoTransportProductsController } from './controllers/promo-transport-products.controller';

@Module({
  providers: [
    PromoHotelProductsService,
    PromosService,
    PromoTransportProductsService,
  ],
  controllers: [
    PromoHotelProductsController,
    PromosController,
    PromoTransportProductsController,
  ],
})
export class OffersModule {}
