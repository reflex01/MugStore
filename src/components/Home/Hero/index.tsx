import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-light-5 to-white pb-10 lg:pb-16 xl:pb-20 pt-56 sm:pt-60 md:pt-64 lg:pt-40 xl:pt-44">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-light-5/50 to-transparent"></div>
      
      <div className="relative z-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
          <div className="xl:col-span-8">
            <div className="relative rounded-2xl bg-white shadow-2 overflow-hidden border border-gray-3/30">
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1 opacity-20"
                width={534}
                height={520}
              />
              <HeroCarousel />
            </div>
          </div>

          <div className="xl:col-span-4">
            <div className="space-y-6">
              <div className="group relative rounded-2xl bg-white shadow-2 border border-gray-3/30 p-6 hover:shadow-3 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-light-5 text-red text-xs font-semibold">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    Hot Deal
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-dark text-lg sm:text-xl mb-3 leading-tight">
                      <a href="#" className="hover:text-blue transition-colors"> 
                        Corporate Mug<br />
                        <span className="text-base font-normal text-dark-4">(Tall Profile Design)</span>
                      </a>
                    </h3>

                    <div className="space-y-2">
                      <p className="font-medium text-dark-4 text-sm uppercase tracking-wide">
                        Limited Time Offer
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-2xl text-red">
                          $1.91
                        </span>
                        <span className="font-medium text-lg text-dark-4 line-through">
                          $1.59
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-light-6 text-green text-xs font-bold">
                          20% OFF
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/2/f/2fe7507b8530e128119d53112ad06300ac28f1dc_Corporate_Black_black.jpg"
                      alt="Corporate Mug"
                      width={80}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl bg-white shadow-2 border border-gray-3/30 p-6 hover:shadow-3 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-light-5 text-blue text-xs font-semibold">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Bestseller
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-dark text-lg sm:text-xl mb-3 leading-tight">
                      <a href="#" className="hover:text-blue transition-colors"> 
                        Atlantic Mug<br />
                        <span className="text-base font-normal text-dark-4">Earthenware Premium</span>
                      </a>
                    </h3>

                    <div className="space-y-2">
                      <p className="font-medium text-dark-4 text-sm uppercase tracking-wide">
                        Limited Time Offer
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-2xl text-red">
                          $1.99
                        </span>
                        <span className="font-medium text-lg text-dark-4 line-through">
                          $1.66
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-light-6 text-green text-xs font-bold">
                          20% OFF
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="https://www.mugstore.co.uk/media/catalog/product/cache/1/image/305x305/9b8548dfcc6170cf14ba05473309d653/e/5/e5f4e7d6967c6fe5965d5a1436227422159a798e_Atlantic_White_white.jpg"
                      alt="Atlantic Mug"
                      width={80}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroFeature />
    </section>
  );
};

export default Hero;
