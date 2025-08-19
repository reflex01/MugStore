import CookiePolicy from "@/components/CookiePolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - AllKeysSale",
  description: "Understand how AllKeysSale uses cookies to improve your experience on our website. Our Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.",
  // other metadata
};

const CookiePolicyPage = () => {
  return (
    <>
      <CookiePolicy />
    </>
  );
};

export default CookiePolicyPage;
