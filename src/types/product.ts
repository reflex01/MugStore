export type Product = {
  title: string;
  name: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  category: string;
  description?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
