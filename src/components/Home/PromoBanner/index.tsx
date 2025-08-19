import React from "react";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- Why Choose Us section --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 px-4 sm:px-7.5 xl:px-10">
          <div>
            <span className="block text-lg text-dark mb-1.5">
              ALL GOOD KEYS MISSION
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-4">
              Why Choose Us
            </h2>

            <p className="max-w-[400px]">
              MugsStore aims to simplify the mug shopping process and provide customers of all needs,
              businesses and individuals alike, a comprehensive collection of mugs from major manufacturers. In
              our mug shop, you can order ceramic mugs, coffee cups, tea mugs, and drinkware
              with excellent quality at affordable prices.
            </p>

            <p className="mt-4 max-w-[400px]">
              We also know our products inside out as we are highly experienced professionals who can solve any
              mug-related question in a quick timely manner simply contact our friendly customer support team
              anytime via chat or email.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
