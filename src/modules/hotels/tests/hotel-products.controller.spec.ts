import { Test, TestingModule } from '@nestjs/testing';
import { HotelProductsController } from '../controllers/hotel-products.controller';

describe('HotelProductsController', () => {
  let controller: HotelProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelProductsController],
    }).compile();

    controller = module.get<HotelProductsController>(HotelProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
