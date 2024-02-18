import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('CATS') private readonly catsClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  getCats() {
    const payload = { count: 5 };
    return this.catsClient.emit('cats-get', payload);
  }
}
