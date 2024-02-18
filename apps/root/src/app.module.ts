import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/root/.env',
    }),
    RmqModule.register({ name: 'CATS' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
