import React from "react";
import { Metadata } from "next";
import ThankYou from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Thank You for Your Purchase - KeyHubOnline | Order Confirmed",
  description: "Thank you for your order! Your purchase has been confirmed and your digital license will be delivered shortly. Get installation support and manage your orders.",
  keywords: "order confirmation, thank you, purchase confirmation, digital license, software delivery",
  openGraph: {
    title: "Thank You for Your Purchase - KeyHubOnline",
    description: "Your order has been confirmed! Digital license delivery in progress.",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const ThankYouPage = () => {
  return (
    <main>
      <ThankYou />
    </main>
  );
};

export default ThankYouPage;