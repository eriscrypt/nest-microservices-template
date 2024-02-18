import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

interface Params {
  count: number;
}

@Controller()
export class CatsController {
  constructor(
    private readonly rmqService: RmqService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getAll() {
    return this.catsService.getAll();
  }

  @Get('ping')
  ping(): string {
    return this.catsService.ping();
  }

  @EventPattern('cats-get')
  async handleGetCats(@Payload() data: Params, @Ctx() context: RmqContext) {
    console.log('Received event "cats-get"');
    console.log({ data });
    this.rmqService.ack(context);
  }
}
