type HomeProductResponse = {
  featured: Product[];
  leatest: {
    new_arrival: Product[];
    best_seller: Product[];
    featured: Product[];
    special_offer: Product[];
  };
  trending: Product[];
  topCategory: [
    id: number,
    name: string,
    slug: string,
    price: number,
    salePrice: number,
    thumbnail: string,
  ]
};

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice: number;
  rating: number;
  brand: string;
  thumbnail: string;
  category?: string;
  images?: [];
  reviews?: [];
};
