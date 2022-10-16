import { Test, TestingModule } from '@nestjs/testing';
import { Users } from '../controllers/users.controller';

describe('Users.Controller.TsController', () => {
  let controller: Users;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Users],
    }).compile();

    controller = module.get<Users>(Users);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
