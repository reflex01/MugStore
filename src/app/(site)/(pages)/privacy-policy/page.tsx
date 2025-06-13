import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | AllKeysSale - Your Data Protection & Privacy Rights",
  description: "Learn how AllKeysSale protects your personal information, handles data collection, and respects your privacy rights. Updated privacy policy with clear terms.",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;