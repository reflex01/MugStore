export type Product = {
  title: string;
  name: string;
  reviews?: number; // Keep for backward compatibility
  totalReviews?: number; // New field
  averageRating?: number; // New field
  price: number;
  discountedPrice: number;
  id: number;
  category: string;
  description?: string;
  features?: string[]; // New field
  specifications?: Record<string, string>; // New field
  faq?: Array<{ question: string; answer: string }>; // New field
  stockStatus?: string; // New field
  customerReviews?: Array<{ reviewer: string; rating: number; comment: string }>; // New field
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
