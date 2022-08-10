import { Test, TestingModule } from '@nestjs/testing';
import { PromoHotelProductsController } from '../controllers/promo-hotel-products.controller';

describe('PromoHotelProductsController', () => {
  let controller: PromoHotelProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromoHotelProductsController],
    }).compile();

    controller = module.get<PromoHotelProductsController>(
      PromoHotelProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
