import React, { Suspense } from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import StructuredData from "@/components/SEO/StructuredData";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop All Mugs & Drinkware - MugsStore",
  description: "Browse our complete collection of premium coffee mugs, tea cups, and drinkware. All products come with fast shipping and quality guarantee.",
  keywords: "mug shop, coffee mugs, tea cups, ceramic mugs, drinkware, premium mugs, fast shipping",
  openGraph: {
    title: "Shop All Mugs & Drinkware - MugsStore",
    description: "Browse our complete collection of premium coffee mugs, tea cups, and drinkware. All products come with fast shipping and quality guarantee.",
    type: "website",
    locale: "en_US",
    siteName: "MugsStore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Mugs & Drinkware - MugsStore", 
    description: "Browse our complete collection of premium coffee mugs, tea cups, and drinkware. All products come with fast shipping and quality guarantee.",
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

const ShopWithSidebarPage = () => {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mug Products Collection",
    "description": "Complete collection of premium coffee mugs and drinkware",
    "url": process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/shop-with-sidebar` : "https://yourdomain.com/shop-with-sidebar",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Featured Mug Products",
      "numberOfItems": 50,
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Cambridge Mug",
          "category": "Coffee Mugs",
          "offers": {
            "@type": "Offer",
            "price": "1.99",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  return (
    <>
      <StructuredData data={collectionSchema} />
      <Suspense fallback={<div>Loading...</div>}>
        <ShopWithSidebar />
      </Suspense>
    </>
  );
};

export default ShopWithSidebarPage;