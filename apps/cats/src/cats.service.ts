import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getHello(): string {
    return 'Hello World!';
  }

  ping(): string {
    return 'pong';
  }
}
