import Home from "@/components/Home";
import { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";

export const metadata: Metadata = {
  title: "Premium Software Store - Genuine Microsoft Products & Digital Licenses",
  description: "Shop genuine Microsoft Windows, Office, and premium software with instant delivery. 100% authentic licenses, lifetime support, and competitive prices.",
  keywords: "Microsoft Windows, Office 365, genuine software, digital licenses, instant delivery, lifetime support, software store",
  openGraph: {
    title: "Premium Software Store - Genuine Microsoft Products",
    description: "Shop genuine Microsoft Windows, Office, and premium software with instant delivery. 100% authentic licenses, lifetime support, and competitive prices.",
    type: "website",
    locale: "en_US",
    siteName: "Premium Software Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Software Store - Genuine Microsoft Products",
    description: "Shop genuine Microsoft Windows, Office, and premium software with instant delivery. 100% authentic licenses, lifetime support, and competitive prices.",
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
        "name": "Are your software products genuine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our software products are 100% genuine and authentic. We only sell legitimate digital licenses directly from authorized distributors."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery is instant! You'll receive your digital license and download instructions immediately after purchase completion."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you provide lifetime support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide lifetime technical support for all our products. Our support team is available to help you with installation and activation."
        }
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Premium Software Collection",
    "description": "Browse our complete collection of genuine Microsoft products and digital licenses",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Featured Software Products",
      "numberOfItems": 50,
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Microsoft Windows 11 Pro",
          "applicationCategory": "Operating System",
          "operatingSystem": "Windows",
          "offers": {
            "@type": "Offer",
            "price": "199.99",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication", 
          "name": "Microsoft Office 365",
          "applicationCategory": "Productivity Software",
          "operatingSystem": "Windows, macOS",
          "offers": {
            "@type": "Offer",
            "price": "99.99",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  return (
    <>
      <StructuredData data={[faqSchema, productCollectionSchema]} />
      <Home />
    </>
  );
}
