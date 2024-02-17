import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CatsModule } from '../src/cats.module';
import request from 'supertest';

describe('CatsController (e2e)', () => {
  let app: INestApplication;

  const headers = {
    Accept: 'application/json',
    origin: 'http://localhost:3000',
    'Content-Type': 'application/json',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CatsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .set(headers)
      .expect(200)
      .expect('Hello World!');
  });
});
