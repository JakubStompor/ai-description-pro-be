import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ProductsQuerySearchParamsDto } from './products/dto/products.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://127.0.0.1:5173'] });
  const config = new DocumentBuilder()
    .setTitle('Product description PRO')
    .setDescription('The product description API')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
    extraModels: [ProductsQuerySearchParamsDto],
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
