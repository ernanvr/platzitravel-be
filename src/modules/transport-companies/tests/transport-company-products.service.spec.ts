import { Test, TestingModule } from '@nestjs/testing';
import { TransportCompanyProductsService } from '../services/transport-company-products.service';

describe('TransportCompanyProductsService', () => {
  let service: TransportCompanyProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportCompanyProductsService],
    }).compile();

    service = module.get<TransportCompanyProductsService>(
      TransportCompanyProductsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
