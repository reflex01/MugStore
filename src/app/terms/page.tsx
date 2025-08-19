import TermsAndConditions from "@/components/TermsAndConditions";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms & Conditions | MugsStore - Service Terms & User Agreement",
  description: "Read MugsStore's terms and conditions, user agreement, and service policies. Understand your rights and responsibilities when purchasing mugs from our store.",
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