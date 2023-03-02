import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(8080);
=======
  await app.listen(3000);
>>>>>>> c98a55e (rebase commit)
}
bootstrap();
