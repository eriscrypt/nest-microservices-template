import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DatabaseModule } from '@app/common/database';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/cats/.env',
    }),
    DatabaseModule,
    RmqModule,
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
