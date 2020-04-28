import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as pino from 'pino';

const logger = pino({
  redact: ['req.headers.authorization'],
  level: 'info',
  serializers: {
    req(req) {
      return {
        method: req.method,
        url: req.url,
        headers: req.headers,
        hostname: req.hostname,
        remoteAddress: req.ip,
        remotePort: req.connection.remotePort,
      };
    },
  },
});

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter({ logger });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      forbidUnknownValues: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
