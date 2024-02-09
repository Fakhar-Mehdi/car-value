import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';

const cookieSession = require('cookie-session');
async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['vndf,vmndf,vn'],
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(port);
  console.log(`Listening to the port ${port}`);
}

config();
bootstrap();
