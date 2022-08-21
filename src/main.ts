import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; //adding Validation layer
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  ); //creating instance of validation class

  //swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Platzitravel API')
    .setDescription('Platzitravel API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}

bootstrap();
