import RefundReturns from "@/components/RefundReturns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Returns Policy | MugsStore - 30-Day Money-Back Guarantee",
  description: "Learn about MugsStore's comprehensive refund and returns policy. We offer a 30-day money-back guarantee, 14-day cancellation rights, and fair refund process for premium mugs.",
  keywords: "refund policy, returns, money-back guarantee, MugsStore refunds, mug returns, cancellation rights",
  openGraph: {
    title: "Refund & Returns Policy | MugsStore",
    description: "Comprehensive refund policy with 30-day guarantee and fair process",
    type: "website",
  },
};

export default function RefundReturnsPage() {
  return <RefundReturns />;
}
