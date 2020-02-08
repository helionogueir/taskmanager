import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidatorHelper } from './core/helper/validator.helper'

(async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidatorHelper())
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  });
  await app.listen(3000)
})()
