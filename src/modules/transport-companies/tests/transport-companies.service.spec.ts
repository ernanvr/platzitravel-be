import { Test, TestingModule } from '@nestjs/testing';
import { TransportCompaniesService } from '../transport-companies.service';

describe('TransportCompaniesService', () => {
  let service: TransportCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportCompaniesService],
    }).compile();

    service = module.get<TransportCompaniesService>(TransportCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
