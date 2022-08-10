import { Test, TestingModule } from '@nestjs/testing';
import { PromoTransportProductsController } from '../controllers/promo-transport-products.controller';

describe('PromoTransportProductsController', () => {
  let controller: PromoTransportProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromoTransportProductsController],
    }).compile();

    controller = module.get<PromoTransportProductsController>(
      PromoTransportProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
