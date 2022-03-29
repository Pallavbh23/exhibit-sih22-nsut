import { Test, TestingModule } from '@nestjs/testing';
import { KernelController } from './kernel.controller';

describe('KernelController', () => {
  let controller: KernelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KernelController],
    }).compile();

    controller = module.get<KernelController>(KernelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
