import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // habilitar CORS para conectar con el frontend
  await app.listen(3001);
}
bootstrap();
