import { Product } from "@/types/product";

// Raw product data from JSON
interface RawProduct {
  title: string;
  name: string;
  description: string;
  price_before: number;
  price_after: number;
  image: string;
}

// Sample realistic reviews for different mug types
const sampleReviews = [
  { reviewer: "Sarah M.", rating: 5, comment: "Perfect for my morning coffee! Great quality and exactly as described. Fast shipping too!" },
  { reviewer: "Michael T.", rating: 4, comment: "Nice mug with good weight and feel. The color is exactly as shown and it's dishwasher safe as promised." },
  { reviewer: "Emma K.", rating: 5, comment: "Excellent quality ceramic. The capacity is perfect and the design looks great in my kitchen." },
  { reviewer: "David L.", rating: 4, comment: "Good value for money. Comfortable to hold and the finish is smooth. Would recommend!" },
  { reviewer: "Lisa R.", rating: 5, comment: "Love this mug! Perfect size and the quality exceeded my expectations. Will order more colors." }
];

// Transform raw product data to match the Product interface
export function transformProduct(rawProduct: RawProduct): Product {
  const avgRating = 4.3 + Math.random() * 0.6; // Random rating between 4.3-4.9
  const reviewCount = Math.floor(Math.random() * 150) + 30; // Random reviews 30-180
  
  // Select random subset of reviews
  const shuffledReviews = [...sampleReviews].sort(() => 0.5 - Math.random());
  const selectedReviews = shuffledReviews.slice(0, Math.floor(Math.random() * 3) + 2); // 2-4 reviews
  
  return {
    id: Math.floor(Math.random() * 1000000), // Generate random ID
    title: rawProduct.title || rawProduct.name,
    name: (rawProduct.name || rawProduct.title).toLowerCase().replace(/\s+/g, '-'), // URL-friendly name
    price: rawProduct.price_before,
    discountedPrice: rawProduct.price_after,
    category: "mugs",
    averageRating: Math.round(avgRating * 10) / 10, // Round to 1 decimal
    totalReviews: reviewCount,
    customerReviews: selectedReviews,
    imgs: {
      thumbnails: [rawProduct.image],
      previews: [rawProduct.image]
    },
    description: rawProduct.description
  };
}

// Get transformed products from the JSON data
export function getTransformedProducts(): Product[] {
  try {
    // Import the products JSON data
    const productsData = require("@/contents/products.json");
    const rawProducts: RawProduct[] = productsData.data || productsData.default?.data || [];
    
    return rawProducts.map(transformProduct);
  } catch (error) {
    console.error("Error loading products:", error);
    return [];
  }
}