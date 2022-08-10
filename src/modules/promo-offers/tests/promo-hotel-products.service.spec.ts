import { Test, TestingModule } from '@nestjs/testing';
import { PromoHotelProductsService } from '../services/promo-hotel-products.service';

describe('PromoHotelProductsService', () => {
  let service: PromoHotelProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoHotelProductsService],
    }).compile();

    service = module.get<PromoHotelProductsService>(PromoHotelProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
