import React, { Suspense } from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Details Page for NextCommerce Template",
  // other metadata
};

// Loading component
const ShopDetailsLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
    </div>
  );
};

const ShopDetailsPage = () => {
  return (
    <main>
      <Suspense fallback={<ShopDetailsLoading />}>
        <ShopDetails />
      </Suspense>
    </main>
  );
};

export default ShopDetailsPage;
