export interface BaseCardItem {
  thumbnail?: string | undefined;
  name: string;
  slug: string;
  price?: string | number;
  salePrice?: string | number;
  brand?: string;
  badge?: string;
  desc?: string;
  link?: string;
  img?: string | any;
}
