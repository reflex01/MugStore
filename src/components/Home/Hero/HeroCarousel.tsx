"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";

const HeroCarousal = () => {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push('/shop-with-sidebar?category=windows');
  };

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet bg-blue/30 w-3 h-3 rounded-full inline-block cursor-pointer transition-all duration-300',
        bulletActiveClass: 'bg-blue transform scale-125'
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="min-h-[480px] lg:min-h-[520px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full px-6 lg:px-12 py-8 lg:py-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="relative">
                  <span className="block font-bold text-4xl lg:text-5xl xl:text-6xl text-blue leading-none">
                    40%
                  </span>
                  <div className="absolute -top-1 -right-2">
                    <svg className="w-6 h-6 text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red to-red-light text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Super Sale
                </div>
              </div>

              <h1 className="font-bold text-dark text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight">
                <span className="block">Windows 11 Pro</span>
                <span className="block text-blue-dark text-lg lg:text-xl font-medium">
                  Genuine Activation Key
                </span>
              </h1>

              <p className="text-dark-3 text-base lg:text-lg mb-8 leading-relaxed max-w-md">
                Experience the latest Windows operating system with enhanced security features, improved performance, and a modern interface designed for productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/shop-with-sidebar?category=windows"
                  className="inline-flex items-center justify-center font-bold text-white text-base bg-gradient-to-r from-blue to-blue-dark py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Shop Now
                </a>
                
                <button
                  onClick={handleCategoryClick}
                  className="inline-flex items-center justify-center font-semibold text-gray-800 text-base border-2 border-gray-400 bg-white py-4 px-6 rounded-xl hover:border-blue hover:text-white hover:bg-blue shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span>View All Windows</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-3xl transform rotate-3"></div>
                <Image
                  src="https://res.cloudinary.com/dxrerwrjk/image/upload/v1739648635/windows-11-pro-5-pc-1_fxkjzp.png"
                  alt="Windows 11 Pro"
                  width={320}
                  height={320}
                  priority={true}
                  fetchPriority="high"
                  className="relative z-10 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="min-h-[480px] lg:min-h-[520px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full px-6 lg:px-12 py-8 lg:py-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="relative">
                  <span className="block font-bold text-4xl lg:text-5xl xl:text-6xl text-blue leading-none">
                    60%
                  </span>
                  <div className="absolute -top-1 -right-2">
                    <svg className="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange to-yellow text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Bestseller
                </div>
              </div>

              <h1 className="font-bold text-dark text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight">
                <span className="block">Windows 10 Pro</span>
                <span className="block text-blue-dark text-lg lg:text-xl font-medium">
                  Genuine License
                </span>
              </h1>

              <p className="text-dark-3 text-base lg:text-lg mb-8 leading-relaxed max-w-md">
                Reliable and secure Windows 10 Pro with all the essential features for business and personal computing needs. Trusted by millions worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/shop-with-sidebar?category=windows"
                  className="inline-flex items-center justify-center font-bold text-white text-base bg-gradient-to-r from-blue to-blue-dark py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Shop Now
                </a>
                
                <button
                  onClick={handleCategoryClick}
                  className="inline-flex items-center justify-center font-medium text-dark text-base border-2 border-gray-3 py-4 px-6 rounded-xl hover:border-blue hover:text-blue hover:bg-blue-light-5 transition-all duration-300"
                >
                  <span>View All Windows</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-light-4 to-yellow-light-2 rounded-3xl transform rotate-3"></div>
                <Image
                  src="https://res.cloudinary.com/dxrerwrjk/image/upload/v1739648634/Windows-10-Professional-Activation-key-250x310_nucmwv.png"
                  alt="Windows 10 Pro"
                  width={320}
                  height={320}
                  className="relative z-10 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
