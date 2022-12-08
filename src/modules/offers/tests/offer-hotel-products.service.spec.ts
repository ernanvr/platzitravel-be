import { Test, TestingModule } from '@nestjs/testing';
import { OfferSupplierProductsService } from '../services/offer-Supplier-products.service';

describe('OfferSupplierProductsService', () => {
  let service: OfferSupplierProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferSupplierProductsService],
    }).compile();

    service = module.get<OfferSupplierProductsService>(
      OfferSupplierProductsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
