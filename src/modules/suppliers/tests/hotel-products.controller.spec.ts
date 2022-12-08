import { Test, TestingModule } from '@nestjs/testing';
import { SupplierProductsController } from '../controllers/Supplier-products.controller';

describe('SupplierProductsController', () => {
  let controller: SupplierProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplierProductsController],
    }).compile();

    controller = module.get<SupplierProductsController>(
      SupplierProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
