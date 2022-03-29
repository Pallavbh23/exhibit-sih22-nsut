import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KernelModule } from './kernel/kernel.module';

@Module({
  imports: [KernelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
