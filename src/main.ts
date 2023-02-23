import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://127.0.0.1:5173'] });
  const config = new DocumentBuilder()
    .setTitle('Product description PRO')
    .setDescription('The product description API')
    .setVersion('1.0')
    .addTag('ai')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
