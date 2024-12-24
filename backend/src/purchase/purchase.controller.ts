import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Post()
  async buyCorn(@Req() req: Request, @Res() res: Response) {
    const userId = req.body.userId || 'anonymous';

    try {
      await this.purchaseService.buyCorn(userId);
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Corn purchased successfully 🌽' });
    } catch (error) {
      if (error.status === HttpStatus.TOO_MANY_REQUESTS) {
        return res
          .status(HttpStatus.TOO_MANY_REQUESTS)
          .json({ error: 'Too Many Requests' });
      }
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Server Error' });
    }
  }
}
