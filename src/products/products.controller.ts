import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { GetProductsResponseDto, ProductDto } from './dto/products.dto';
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
  @ApiQuery({
    name: 'productsQuerySearchParams',
    required: false,
    type: String,
  })
  getProducts(
    @Param('productsCollectionDate') productsCollectionDate: string,
    @Query('productsQuerySearchParams') productsQuerySearchParams: string,
  ): Observable<GetProductsResponseDto> {
    return this.productsService.getProducts(
      productsCollectionDate,
      productsQuerySearchParams,
    );
  }

  @Put(':productsCollectionDate/:productId')
  @ApiOperation({ summary: 'Update product in Shopify shop' })
  @ApiCreatedResponse({
    type: ProductDto,
  })
  updateProduct(
    @Param('productsCollectionDate') productsCollectionDate: string,
    @Param('productId') productId: number,
    @Body() product: ProductDto,
  ): Observable<ProductDto> {
    return this.productsService.updateProduct(
      productsCollectionDate,
      productId,
      product,
    );
  }
}
