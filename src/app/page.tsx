import Home from "@/components/Home";
import { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";

export const metadata: Metadata = {
  title: "MugsStore - Premium Coffee Mugs & Drinkware Collection",
  description: "Shop premium coffee mugs, tea cups, and drinkware with fast shipping. High-quality ceramic mugs, unique designs, and competitive prices.",
  keywords: "coffee mugs, tea cups, ceramic mugs, drinkware, coffee accessories, premium mugs, mug store",
  openGraph: {
    title: "MugsStore - Premium Coffee Mugs & Drinkware",
    description: "Shop premium coffee mugs, tea cups, and drinkware with fast shipping. High-quality ceramic mugs, unique designs, and competitive prices.",
    type: "website",
    locale: "en_US",
    siteName: "MugsStore",
  },
  twitter: {
    card: "summary_large_image",
    title: "MugsStore - Premium Coffee Mugs & Drinkware",
    description: "Shop premium coffee mugs, tea cups, and drinkware with fast shipping. High-quality ceramic mugs, unique designs, and competitive prices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your mugs high quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our mugs are made from high-quality ceramic materials. We only sell premium mugs from trusted manufacturers with excellent craftsmanship."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer fast shipping with most orders delivered within 3-5 business days. Express shipping options are also available."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you offer returns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a 30-day return policy for all our mugs. If you're not satisfied with your purchase, you can return it for a full refund."
        }
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Premium Mug Collection",
    "description": "Browse our complete collection of premium coffee mugs and drinkware",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Featured Mug Products",
      "numberOfItems": 50,
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Cambridge Mug",
          "category": "Coffee Mugs",
          "material": "Ceramic",
          "offers": {
            "@type": "Offer",
            "price": "1.99",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Product", 
          "name": "Bell Mug",
          "category": "Coffee Mugs",
          "material": "Ceramic",
          "offers": {
            "@type": "Offer",
            "price": "2.49",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={productCollectionSchema} />
      <Home />
    </>
  );
}