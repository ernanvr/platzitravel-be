import { Test, TestingModule } from '@nestjs/testing';
import { TransportCompanyProductsController } from '../controllers/transport-company-products.controller';

describe('TransportCompanyProductsController', () => {
  let controller: TransportCompanyProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportCompanyProductsController],
    }).compile();

    controller = module.get<TransportCompanyProductsController>(
      TransportCompanyProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
