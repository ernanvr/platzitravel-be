import { Test, TestingModule } from '@nestjs/testing';
import { PromoTransportProductsService } from '../services/promo-transport-products.service';

describe('PromoTransportProductsService', () => {
  let service: PromoTransportProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoTransportProductsService],
    }).compile();

    service = module.get<PromoTransportProductsService>(
      PromoTransportProductsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
