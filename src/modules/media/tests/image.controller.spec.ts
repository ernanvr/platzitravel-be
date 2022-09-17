import { Test, TestingModule } from '@nestjs/testing';
import { GCloudController } from '../controllers/image.controller';

describe('ControllersController', () => {
  let controller: GCloudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GCloudController],
    }).compile();

    controller = module.get<GCloudController>(GCloudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
