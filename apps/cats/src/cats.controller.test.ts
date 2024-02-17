import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigModule } from '@nestjs/config';

describe('Cats', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = app.get<CatsController>(CatsController);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('should return an "ping"', async () => {
    expect(controller.ping()).toBe('pong');
  });
});
