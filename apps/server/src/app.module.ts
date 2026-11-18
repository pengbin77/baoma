import { Module } from '@nestjs/common';
import { InviteCodeModule } from './modules/invite-code/invite-code.module';
import { ShopModule } from './modules/shop/shop.module';
import { ProductPoolModule } from './modules/product-pool/product-pool.module';
import { OrderModule } from './modules/order/order.module';
import { SplitModule } from './modules/split/split.module';
import { AiJobModule } from './modules/ai-job/ai-job.module';
import { DecorationModule } from './modules/decoration/decoration.module';

@Module({
  imports: [InviteCodeModule, ShopModule, ProductPoolModule, OrderModule, SplitModule, AiJobModule, DecorationModule],
})
export class AppModule {}
