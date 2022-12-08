import { Test, TestingModule } from '@nestjs/testing';
import { OfferSupplierProductsController } from '../controllers/offer-Supplier-products.controller';

describe('OfferSupplierProductsController', () => {
  let controller: OfferSupplierProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferSupplierProductsController],
    }).compile();

    controller = module.get<OfferSupplierProductsController>(
      OfferSupplierProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
