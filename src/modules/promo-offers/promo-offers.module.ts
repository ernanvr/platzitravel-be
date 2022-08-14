import { Module } from '@nestjs/common';
import { PromosService } from './services/promos.service';
import { PromosController } from './controllers/promos.controller';
import { PromoHotelProductsController } from './controllers/promo-hotel-products.controller';
import { PromoHotelProductsService } from './services/promo-hotel-products.service';
import { PromoTransportProductsService } from './services/promo-transport-products.service';
import { PromoTransportProductsController } from './controllers/promo-transport-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoOffer } from './entities/promo-offers.entity';
import { PromoOfferTransportProduct } from './entities/promo-offer-transport-products.entity';
import { PromoOfferHotelProduct } from './entities/promo-offer-hotel-products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PromoOffer,
      PromoOfferHotelProduct,
      PromoOfferTransportProduct,
    ]),
  ],
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
export class PromoOffersModule {}
