import React from 'react';
import { Product } from '@/types/product';

interface ProductSEOProps {
  product: Product;
  baseUrl?: string;
}

const ProductSEO: React.FC<ProductSEOProps> = ({ 
  product, 
  baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com' 
}) => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.imgs?.previews || [],
    "description": product.description || `Digital license for ${product.title}. Instant delivery and lifetime support included.`,
    "brand": {
      "@type": "Brand", 
      "name": "Microsoft"
    },
    "color": "Blue",
    "manufacturer": {
      "@type": "Organization",
      "name": "Microsoft",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
    },
    "category": "Drinkware",
    "productID": product.id?.toString() || product.title.replace(/\s+/g, '-').toLowerCase(),
    "mpn": product.id?.toString() || product.title.replace(/\s+/g, '-').toLowerCase(),
    "sku": product.id?.toString() || product.title.replace(/\s+/g, '-').toLowerCase(),
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Customer Review"
        },
        "datePublished": new Date().toISOString(),
        "reviewBody": "Beautiful mug with excellent quality ceramic. Perfect size and ships fast. The color is exactly as shown and it's completely dishwasher safe. Highly recommend!",
        "name": "High Quality Mug",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": "5",
          "ratingValue": String(product.averageRating || 4.5),
          "worstRating": "1"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(product.averageRating || 4.5),
      "reviewCount": String(product.totalReviews || 1)
    },
    "offers": {
      "@type": "Offer",
      "price": String(product.discountedPrice),
      "priceCurrency": "USD",
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "url": `${baseUrl}/shop-details?name=${encodeURIComponent(product.name || product.title)}`,
      "seller": {
        "@type": "Organization",
        "name": "MugsStore"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema),
      }}
    />
  );
};

export default ProductSEO;