import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PurchaseService {
  constructor(private prisma: PrismaService) {}

  async buyCorn(userId: string) {
    // 1. Chequea si este userId compró en el último minuto
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);

    const purchasesLastMinute = await this.prisma.purchase.count({
      where: {
        userId,
        createdAt: {
          gte: oneMinuteAgo,
        },
      },
    });

    // 2. Aplica regla de rate limit (1 por minuto)
    if (purchasesLastMinute >= 1) {
      throw new HttpException(
        'Too Many Requests',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    // 3. Registra la nueva compra
    await this.prisma.purchase.create({
      data: {
        userId,
      },
    });

    return true;
  }
}
