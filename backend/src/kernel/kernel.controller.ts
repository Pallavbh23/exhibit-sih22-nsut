import { Controller, Get } from '@nestjs/common';
import { KernelService } from './kernel.service';

@Controller('kernel')
export class KernelController {
    constructor(private readonly kernelService: KernelService) {}

    @Get() 
    async getKernels(): Promise<any> {
        return this.kernelService.getKernels();
    }
}
