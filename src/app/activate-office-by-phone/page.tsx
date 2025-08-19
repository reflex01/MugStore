import ActivateOfficeByPhone from "@/components/ActivateOfficeByPhone";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Activate Office by Phone - Step-by-Step Guide | AllKeysSale",
  description: "Complete guide on how to activate Microsoft Office 2019/2016 by phone. Two proven methods with screenshots. Get your Office activated quickly and easily.",
  keywords: "activate office by phone, office phone activation, microsoft office activation, office 2019 activation, office 2016 activation, confirmation ID, installation ID",
  openGraph: {
    title: "How to Activate Office by Phone - Complete Guide",
    description: "Step-by-step guide to activate Microsoft Office by phone with detailed screenshots and instructions.",
    type: "article",
    images: [
      {
        url: "/images/activationByPhone/ByPhone.png",
        width: 1200,
        height: 630,
        alt: "How to Activate Office by Phone Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Activate Office by Phone - Complete Guide",
    description: "Step-by-step guide to activate Microsoft Office by phone with detailed screenshots and instructions.",
    images: ["/images/activationByPhone/ByPhone.png"],
  },
  alternates: {
    canonical: "/activate-office-by-phone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ActivateOfficeByPhonePage = () => {
  return (
    <>
      <ActivateOfficeByPhone />
    </>
  );
};

export default ActivateOfficeByPhonePage;