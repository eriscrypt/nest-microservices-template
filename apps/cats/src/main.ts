import { NestFactory } from '@nestjs/core';
import { CatsModule } from './cats.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('CATS'));
  await app.startAllMicroservices();
}
bootstrap().catch(console.error);
