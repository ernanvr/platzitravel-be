import { Module } from '@nestjs/common';
import { OffersService } from './services/offers.service';
import { OffersController } from './controllers/offers.controller';
import { OfferSupplierProductsController } from './controllers/offer-supplier-products.controller';
import { OfferSupplierProductsService } from './services/offer-supplier-products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferSupplierProduct } from './entities/offer-supplier-products.entity';
import { Offer } from './entities/offers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offer, OfferSupplierProduct])],
  providers: [OfferSupplierProductsService, OffersService],
  controllers: [OfferSupplierProductsController, OffersController],
})
export class OffersModule {}
