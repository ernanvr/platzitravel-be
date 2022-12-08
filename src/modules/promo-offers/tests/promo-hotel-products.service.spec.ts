import { Test, TestingModule } from '@nestjs/testing';
import { PromoSupplierProductsService } from '../services/promo-supplier-products.service';

describe('PromoSupplierProductsService', () => {
  let service: PromoSupplierProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoSupplierProductsService],
    }).compile();

    service = module.get<PromoSupplierProductsService>(
      PromoSupplierProductsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
