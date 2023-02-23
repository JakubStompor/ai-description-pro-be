export interface ProductsQueryParams {
  api_version: string;
  collection_id: string;
  created_at_max: string;
  created_at_min: string;
  fields: string;
  handle: string;
  ids: string;
  limit: number;
  presentment_currencies: string;
  product_type: string;
  published_at_max: string;
  published_at_min: string;
  published_status: 'published' | 'unpublished' | 'any';
  since_id: string;
  status: 'active' | 'archived' | 'draft';
  title: string;
  updated_at_max: string;
  updated_at_min: string;
  vendor: string;
}
