import { Module } from '@nestjs/common';
import { PromosService } from './services/promos.service';
import { PromosController } from './controllers/promos.controller';
import { PromoSupplierProductsController } from './controllers/promo-offer-supplier-products.controller';
import { PromoSupplierProductsService } from './services/promo-supplier-products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoOffer } from './entities/promo-offers.entity';
import { PromoOfferSupplierProduct } from './entities/promo-offer-supplier-products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromoOffer, PromoOfferSupplierProduct])],
  providers: [PromoSupplierProductsService, PromosService],
  controllers: [PromoSupplierProductsController, PromosController],
})
export class PromoOffersModule {}
