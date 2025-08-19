import DeliveryPayment from "@/components/DeliveryPayment";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Delivery & Payment | MugsStore - Fast Shipping & Secure Payments",
  description: "Learn about MugsStore's fast shipping process and secure payment options. Get your premium mugs delivered quickly to your door.",
  // other metadata
};

const DeliveryPaymentPage = () => {
  return (
    <main>
      <DeliveryPayment />
    </main>
  );
};

export default DeliveryPaymentPage;