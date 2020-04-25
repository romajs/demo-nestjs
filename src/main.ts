import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: false,
    forbidUnknownValues: true,
  }));
  await app.listen(3000);
}

bootstrap();
