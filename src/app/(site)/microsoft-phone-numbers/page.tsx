import { Metadata } from "next";
import MicrosoftNumbers from "@/components/MicrosoftNumbers";

export const metadata: Metadata = {
  title: "Microsoft Activation Phone Numbers Worldwide | AllKeysSale",
  description: "Complete directory of Microsoft activation phone numbers for Office and Windows. Find the right number to call for your region when activating by phone. Available 24/7 worldwide.",
  keywords: [
    "Microsoft phone numbers",
    "Office activation phone",
    "Windows activation phone", 
    "Microsoft support numbers",
    "activation by phone",
    "Microsoft worldwide numbers",
    "Office phone activation",
    "Windows phone activation",
    "Microsoft customer service",
    "activation support"
  ],
  authors: [{ name: "AllKeysSale" }],
  creator: "AllKeysSale",
  publisher: "AllKeysSale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://allkeyssale.com"),
  alternates: {
    canonical: "/microsoft-phone-numbers",
  },
  openGraph: {
    title: "Microsoft Activation Phone Numbers Worldwide | AllKeysSale",
    description: "Complete directory of Microsoft activation phone numbers for Office and Windows. Find the right number to call for your region when activating by phone.",
    url: "/microsoft-phone-numbers",
    siteName: "AllKeysSale",
    images: [
      {
        url: "/images/og-microsoft-numbers.jpg",
        width: 1200,
        height: 630,
        alt: "Microsoft Activation Phone Numbers Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Activation Phone Numbers Worldwide | AllKeysSale",
    description: "Complete directory of Microsoft activation phone numbers for Office and Windows. Find the right number to call for your region.",
    images: ["/images/twitter-microsoft-numbers.jpg"],
    creator: "@allkeyssale",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function MicrosoftNumbersPage() {
  return <MicrosoftNumbers />;
}
