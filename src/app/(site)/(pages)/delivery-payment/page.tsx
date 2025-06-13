import DeliveryPayment from "@/components/DeliveryPayment";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Delivery & Payment | AllKeysSale - Fast Digital Delivery & Secure Payments",
  description: "Learn about AllKeysSale's fast digital delivery process and secure payment options. Get your software keys delivered within minutes via email.",
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