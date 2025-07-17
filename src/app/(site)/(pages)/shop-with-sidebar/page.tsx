import React, { Suspense } from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import StructuredData from "@/components/SEO/StructuredData";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop All Software Products - Premium Software Store",
  description: "Browse our complete collection of genuine Microsoft products, digital licenses, and premium software. All products come with instant delivery and lifetime support.",
  keywords: "software shop, Microsoft products, Windows licenses, Office 365, digital downloads, genuine software, instant delivery",
  openGraph: {
    title: "Shop All Software Products - Premium Software Store",
    description: "Browse our complete collection of genuine Microsoft products, digital licenses, and premium software. All products come with instant delivery and lifetime support.",
    type: "website",
    locale: "en_US",
    siteName: "Premium Software Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Software Products - Premium Software Store", 
    description: "Browse our complete collection of genuine Microsoft products, digital licenses, and premium software. All products come with instant delivery and lifetime support.",
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

// Loading component
const ShopLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
    </div>
  );
};

const ShopWithSidebarPage = () => {
  const productListingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Software Products Collection",
    "description": "Complete collection of genuine Microsoft software and digital licenses",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/shop-with-sidebar`,
    "numberOfItems": 50,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
  };

  return (
    <main>
      <StructuredData data={productListingSchema} />
      <Suspense fallback={<ShopLoading />}>
        <ShopWithSidebar />
      </Suspense>
    </main>
  );
};

export default ShopWithSidebarPage;
