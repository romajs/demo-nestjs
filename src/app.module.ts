import { Global, Module } from '@nestjs/common';

import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { AuthenticationModule } from '@src/modules/authentication/authentication.module';
import { CatsModule } from '@src/modules/cats/cats.module';

@Global()
@Module({
  imports: [AuthenticationModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
