import { Test, TestingModule } from '@nestjs/testing';
import { TransportCompaniesController } from '../transport-companies.controller';

describe('TransportCompaniesController', () => {
  let controller: TransportCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportCompaniesController],
    }).compile();

    controller = module.get<TransportCompaniesController>(
      TransportCompaniesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
