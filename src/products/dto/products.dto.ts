import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class ProductPagingDto {
  @ApiProperty()
  @IsObject()
  previous: object;
  @ApiProperty()
  @IsObject()
  next: object;
}

class ProductVariantDto {
  @ApiProperty()
  @IsNumber()
  id: number;
  @ApiProperty()
  @IsNumber()
  product_id: number;
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  @IsString()
  price: string;
  @ApiProperty()
  @IsString()
  sku: string;
  @ApiProperty()
  @IsNumber()
  position: number;
  @ApiProperty()
  @IsString()
  inventory_policy: string;
  @ApiProperty()
  compare_at_price: any;
  @ApiProperty()
  @IsString()
  fulfillment_service: string;
  @ApiProperty()
  @IsString()
  inventory_management: string;
  @ApiProperty()
  @IsString()
  option1: string;
  @ApiProperty()
  option2: any;
  @ApiProperty()
  option3: any;
  @ApiProperty()
  @IsString()
  created_at: string;
  @ApiProperty()
  @IsString()
  updated_at: string;
  @ApiProperty()
  @IsBoolean()
  taxable: boolean;
  @ApiProperty()
  @IsString()
  barcode: string;
  @ApiProperty()
  @IsNumber()
  grams: number;
  @ApiProperty()
  image_id: any;
  @ApiProperty()
  @IsNumber()
  weight: number;
  @ApiProperty()
  @IsString()
  weight_unit: string;
  @ApiProperty()
  @IsNumber()
  inventory_item_id: number;
  @ApiProperty()
  @IsNumber()
  inventory_quantity: number;
  @ApiProperty()
  @IsNumber()
  old_inventory_quantity: number;
  @ApiProperty()
  @IsBoolean()
  requires_shipping: boolean;
  @ApiProperty()
  @IsString()
  admin_graphql_api_id: string;
}

class ProductOptionDto {
  @ApiProperty()
  @IsNumber()
  id: number;
  @ApiProperty()
  @IsNumber()
  product_id: number;
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNumber()
  position: number;
  @ApiProperty()
  @IsArray()
  values: string[];
}

class ProductImageDto {
  @ApiProperty()
  @IsNumber()
  id: number;
  @ApiProperty()
  @IsNumber()
  product_id: number;
  @ApiProperty()
  @IsNumber()
  position: number;
  @ApiProperty()
  @IsString()
  created_at: string;
  @ApiProperty()
  @IsString()
  updated_at: string;
  @ApiProperty()
  @IsString()
  alt: string;
  @ApiProperty()
  @IsNumber()
  width: number;
  @ApiProperty()
  @IsNumber()
  height: number;
  @ApiProperty()
  @IsString()
  src: string;
  @ApiProperty()
  @IsArray()
  variant_ids: any[];
  @ApiProperty()
  @IsString()
  admin_graphql_api_id: string;
}

export class ProductDto {
  @ApiProperty()
  @IsNumber()
  id: number;
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  @IsString()
  body_html: string;
  @ApiProperty()
  @IsString()
  vendor: string;
  @ApiProperty()
  @IsString()
  product_type: string;
  @ApiProperty()
  @IsString()
  created_at: string;
  @ApiProperty()
  @IsString()
  handle: string;
  @ApiProperty()
  @IsString()
  updated_at: string;
  @ApiProperty()
  @IsString()
  published_at: string;
  @ApiProperty()
  @IsString()
  template_suffix: string;
  @ApiProperty()
  @IsString()
  status: string;
  @ApiProperty()
  @IsString()
  published_scope: string;
  @ApiProperty()
  @IsString()
  tags: string;
  @ApiProperty()
  @IsString()
  admin_graphql_api_id: string;
  @ApiProperty({
    type: ProductVariantDto,
  })
  @IsArray()
  variants: ProductVariantDto[];
  @ApiProperty({
    type: ProductOptionDto,
  })
  @IsArray()
  options: ProductOptionDto[];
  @ApiProperty({
    type: ProductImageDto,
  })
  @IsArray()
  images: ProductImageDto[];
  @ApiProperty({
    type: ProductImageDto,
  })
  image: ProductImageDto;
}

export class GetProductsResponseDto {
  @ApiProperty({
    type: ProductDto,
  })
  @IsArray()
  products: ProductDto[];
  @ApiProperty({
    type: ProductPagingDto,
  })
  paging: ProductPagingDto;
}
