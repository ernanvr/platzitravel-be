import { Test, TestingModule } from '@nestjs/testing';
import { OfferTransportProductsController } from '../controllers/offer-transport-products.controller';

describe('OfferTransportProductsController', () => {
  let controller: OfferTransportProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferTransportProductsController],
    }).compile();

    controller = module.get<OfferTransportProductsController>(
      OfferTransportProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
