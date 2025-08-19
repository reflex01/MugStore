import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | MugsStore - Your Trusted Premium Mug Partner",
  description: "Learn about MugsStore, your reliable source for premium coffee mugs. Discover our mission, values, and commitment to providing quality drinkware solutions.",
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