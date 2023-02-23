import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UrlService } from 'src/utils/url.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [ProductsController],
  providers: [ProductsService, UrlService],
})
export class ProductsModule {}
