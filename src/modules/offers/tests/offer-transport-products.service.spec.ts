import { Test, TestingModule } from '@nestjs/testing';
import { OfferTransportProductsService } from '../services/offer-transport-products.service';

describe('OfferTransportProductsService', () => {
  let service: OfferTransportProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferTransportProductsService],
    }).compile();

    service = module.get<OfferTransportProductsService>(
      OfferTransportProductsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
