import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbConection } from './database/connection.database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  DbConection.connect();
  await app.listen(3000);
}
bootstrap();
