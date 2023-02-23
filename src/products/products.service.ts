import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';
import { EnvironmentVariables } from 'src/config/config.model';
import { Link } from 'src/utils/url.model';
import { UrlService } from 'src/utils/url.service';
import {
  GetProductsResponseDto,
  ProductDto,
  ProductPagingDto,
} from './dto/products.dto';
import { ProductsQueryParams } from './products.model';

@Injectable()
export class ProductsService {
  private shopifyApiUrl: string;
  private headers: object;

  constructor(
    private urlService: UrlService,
    private configService: ConfigService<EnvironmentVariables>,
    private httpService: HttpService,
  ) {
    this.shopifyApiUrl = this.configService.get('SHOPIFY_API_URL');
    this.headers = {
      'X-Shopify-Access-Token': this.configService.get('SHOPIFY_APP_API_KEY'),
    };
  }

  updateProduct(
    productCollectionDate: string,
    productId: string,
    product: ProductDto,
  ): Observable<ProductDto> {
    return this.httpService
      .put<ProductDto>(
        `${this.shopifyApiUrl}/${productCollectionDate}/products/${productId}.json`,
        { product: product },
        {
          headers: this.headers,
        },
      )
      .pipe(map((response) => response.data));
  }

  getProducts(
    productCollectionDate: string,
    queryParams: ProductsQueryParams,
  ): Observable<GetProductsResponseDto> {
    const query = new URLSearchParams(queryParams as any).toString();
    return this.httpService
      .get(
        `${this.shopifyApiUrl}/${productCollectionDate}/products.json?${query}`,
        {
          headers: this.headers,
        },
      )
      .pipe(
        map((response) => ({
          paging: this.getPaging(response.headers.link) as ProductPagingDto,
          products: response.data.products as ProductDto[],
        })),
      );
  }

  private getPaging(link: string): ProductPagingDto {
    const links: Link[] = this.urlService.getLinks(link);
    const previousLink: string = this.urlService.getLinkUrl(links, 'previous');
    const nextLink: string = this.urlService.getLinkUrl(links, 'next');
    return {
      previous: this.urlService.getQueryParams(previousLink),
      next: this.urlService.getQueryParams(nextLink),
    };
  }
}
