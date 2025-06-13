import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | AllKeysSale - Your Trusted Software License Partner",
  description: "Learn about AllKeysSale, your reliable source for authentic software licenses. Discover our mission, values, and commitment to providing genuine software solutions.",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;