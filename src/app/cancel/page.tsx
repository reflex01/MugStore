import React from "react";
import { Metadata } from "next";
import Cancel from "@/components/Cancel";

export const metadata: Metadata = {
  title: "Payment Cancelled - KeyHubOnline | Try Again",
  description: "Your payment was cancelled. No charges have been made. You can retry your purchase or contact our support team for assistance.",
  keywords: "payment cancelled, failed payment, retry purchase, customer support",
  openGraph: {
    title: "Payment Cancelled - KeyHubOnline",
    description: "Your payment was cancelled. No charges have been made.",
    type: "website",
  },
};

const CancelPage = () => {
  return (
    <main>
      <Cancel />
    </main>
  );
};

export default CancelPage;