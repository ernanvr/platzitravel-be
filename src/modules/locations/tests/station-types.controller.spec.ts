import { Test, TestingModule } from '@nestjs/testing';
import { StationTypesController } from '../controllers/station-types.controller';

describe('StationTypesController', () => {
  let controller: StationTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationTypesController],
    }).compile();

    controller = module.get<StationTypesController>(StationTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
