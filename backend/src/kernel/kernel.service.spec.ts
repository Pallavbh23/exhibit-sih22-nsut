import { Test, TestingModule } from '@nestjs/testing';
import { KernelService } from './kernel.service';

describe('KernelService', () => {
  let service: KernelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KernelService],
    }).compile();

    service = module.get<KernelService>(KernelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
