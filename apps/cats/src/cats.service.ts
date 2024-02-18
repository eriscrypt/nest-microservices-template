import { DatabaseService } from '@app/common/database';
import { Injectable } from '@nestjs/common';
import { Cat } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: DatabaseService) {}

  getAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }

  ping(): string {
    return 'pong';
  }
}
