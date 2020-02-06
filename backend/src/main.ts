import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidatorHelper } from './helper/validator.helper';

(async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidatorHelper())
  await app.listen(3000);
})();
