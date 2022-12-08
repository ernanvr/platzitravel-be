import { Test, TestingModule } from '@nestjs/testing';
import { PromoSupplierProductsController } from '../controllers/promo-Supplier-products.controller';

describe('PromoSupplierProductsController', () => {
  let controller: PromoSupplierProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromoSupplierProductsController],
    }).compile();

    controller = module.get<PromoSupplierProductsController>(
      PromoSupplierProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
