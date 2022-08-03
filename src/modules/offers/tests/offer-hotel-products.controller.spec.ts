import { Test, TestingModule } from '@nestjs/testing';
import { OfferHotelProductsController } from '../controllers/offer-hotel-products.controller';

describe('OfferHotelProductsController', () => {
  let controller: OfferHotelProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferHotelProductsController],
    }).compile();

    controller = module.get<OfferHotelProductsController>(
      OfferHotelProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
