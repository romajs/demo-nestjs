import { Global, Module } from '@nestjs/common';

import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { CatsModule } from '@src/modules/cats/cats.module';

@Global()
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
