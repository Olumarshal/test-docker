import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT;
  await app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}
bootstrap();
