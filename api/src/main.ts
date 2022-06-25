import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Try it app API')
    .setVersion('1.0')
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        const formattedErrors = errors.map((error) => {
          return {
            field: error.property,
            errors: Object.keys(error.constraints).map(
              (key) => `${key}-${error.property}`,
            ),
          };
        });
        return new BadRequestException(formattedErrors);
      },
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(5001);
}
bootstrap();
