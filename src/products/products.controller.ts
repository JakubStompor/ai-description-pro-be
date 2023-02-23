import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { GetProductsResponseDto, ProductDto } from './dto/products.dto';
import { ProductsQueryParams } from './products.model';
import { ProductsService } from './products.service';

@ApiTags('Shopify products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':productsCollectionDate')
  @ApiOperation({ summary: 'Get all products from Shopify shop' })
  @ApiOkResponse({
    type: GetProductsResponseDto,
  })
  getProducts(
    @Param('productsCollectionDate') productsCollectionDate: string,
    @Query() query: ProductsQueryParams,
  ): Observable<GetProductsResponseDto> {
    return this.productsService.getProducts(productsCollectionDate, query);
  }

  @Put(':productsCollectionDate/:productId')
  @ApiOperation({ summary: 'Update product in Shopify shop' })
  @ApiCreatedResponse({
    type: ProductDto,
  })
  updateProduct(
    @Param('productsCollectionDate') productsCollectionDate: string,
    @Param('productId') productId: string,
    @Body() product: ProductDto,
  ): Observable<ProductDto> {
    return this.productsService.updateProduct(
      productsCollectionDate,
      productId,
      product,
    );
  }
}
