import { Module } from '@nestjs/common';
import { KernelController } from './kernel.controller';
import { KernelService } from './kernel.service';
import { KernelController } from './kernel.controller';

@Module({
  controllers: [KernelController],
  providers: [KernelService]
})
export class KernelModule {}
