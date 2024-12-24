import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [PrismaModule, PurchaseModule],
})
export class AppModule {}
