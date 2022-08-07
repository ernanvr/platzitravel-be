import { Test, TestingModule } from '@nestjs/testing';
import { StationTypesService } from '../services/station-types.service';

describe('StationTypesService', () => {
  let service: StationTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationTypesService],
    }).compile();

    service = module.get<StationTypesService>(StationTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
