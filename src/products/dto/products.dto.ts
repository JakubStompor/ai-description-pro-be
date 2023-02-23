import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class GetProductsResponseDto {
  @IsArray()
  products: ProductDto[];
  paging: ProductPagingDto;
}

export class ProductDto {
  @IsNumber()
  readonly id: number;
  @IsString()
  readonly title: string;
  @IsString()
  readonly body_html: string;
  @IsString()
  readonly vendor: string;
  @IsString()
  readonly product_type: string;
  @IsString()
  readonly created_at: string;
  @IsString()
  readonly handle: string;
  @IsString()
  readonly updated_at: string;
  @IsString()
  readonly published_at: string;
  @IsString()
  readonly template_suffix: string;
  @IsString()
  readonly status: string;
  @IsString()
  readonly published_scope: string;
  @IsString()
  readonly tags: string;
  @IsString()
  readonly admin_graphql_api_id: string;
  @IsArray()
  variants: ProductVariantDto[];
  @IsArray()
  options: ProductOptionDto[];
  @IsArray()
  images: ProductImageDto[];
  image: ProductImageDto;
}

export class ProductPagingDto {
  @IsObject()
  previous: object;
  @IsObject()
  next: object;
}

class ProductVariantDto {
  @IsNumber()
  id: number;
  @IsNumber()
  product_id: number;
  @IsString()
  title: string;
  @IsString()
  price: string;
  @IsString()
  sku: string;
  @IsNumber()
  position: number;
  @IsString()
  inventory_policy: string;
  compare_at_price: any;
  @IsString()
  fulfillment_service: string;
  @IsString()
  inventory_management: string;
  @IsString()
  option1: string;
  option2: any;
  option3: any;
  @IsString()
  created_at: string;
  @IsString()
  updated_at: string;
  @IsBoolean()
  taxable: boolean;
  @IsString()
  barcode: string;
  @IsNumber()
  grams: number;
  image_id: any;
  @IsNumber()
  weight: number;
  @IsString()
  weight_unit: string;
  @IsNumber()
  inventory_item_id: number;
  @IsNumber()
  inventory_quantity: number;
  @IsNumber()
  old_inventory_quantity: number;
  @IsBoolean()
  requires_shipping: boolean;
  @IsString()
  admin_graphql_api_id: string;
}

class ProductOptionDto {
  @IsNumber()
  id: number;
  @IsNumber()
  product_id: number;
  @IsString()
  name: string;
  @IsNumber()
  position: number;
  @IsArray()
  values: string[];
}

class ProductImageDto {
  @IsNumber()
  id: number;
  @IsNumber()
  product_id: number;
  @IsNumber()
  position: number;
  @IsString()
  created_at: string;
  @IsString()
  updated_at: string;
  @IsString()
  alt: string;
  @IsNumber()
  width: number;
  @IsNumber()
  height: number;
  @IsString()
  src: string;
  @IsArray()
  variant_ids: any[];
  @IsString()
  admin_graphql_api_id: string;
}
