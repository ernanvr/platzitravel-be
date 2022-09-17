import { Test, TestingModule } from '@nestjs/testing';
import { GcloudStorageService } from '../services/image.service';

describe('GcloudStorageService', () => {
  let service: GcloudStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GcloudStorageService],
    }).compile();

    service = module.get<GcloudStorageService>(GcloudStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
