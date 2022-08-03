import { Test, TestingModule } from '@nestjs/testing';
import { HotelProductsService } from '../services/hotel-products.service';

describe('HotelProductsService', () => {
  let service: HotelProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelProductsService],
    }).compile();

    service = module.get<HotelProductsService>(HotelProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
