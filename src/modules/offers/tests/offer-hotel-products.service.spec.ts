import { Test, TestingModule } from '@nestjs/testing';
import { OfferHotelProductsService } from '../services/offer-hotel-products.service';

describe('OfferHotelProductsService', () => {
  let service: OfferHotelProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferHotelProductsService],
    }).compile();

    service = module.get<OfferHotelProductsService>(OfferHotelProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
