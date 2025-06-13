import TermsAndConditions from "@/components/TermsAndConditions";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms & Conditions | AllKeysSale - Service Terms & User Agreement",
  description: "Read AllKeysSale's terms and conditions, user agreement, and service policies. Understand your rights and responsibilities when using our software license platform.",
  // other metadata
};

const TermsAndConditionsPage = () => {
  return (
    <main>
      <TermsAndConditions />
    </main>
  );
};

export default TermsAndConditionsPage;