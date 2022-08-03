import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTypesController } from '../controllers/company-types.controller';

describe('CompanyTypesController', () => {
  let controller: CompanyTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyTypesController],
    }).compile();

    controller = module.get<CompanyTypesController>(CompanyTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
