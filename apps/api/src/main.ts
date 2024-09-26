import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { add } from '@new/sample-lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(add(1, 5));
  await app.listen(3000);
}
bootstrap();
