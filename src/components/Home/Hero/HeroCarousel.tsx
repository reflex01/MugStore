"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push('/shop-with-sidebar?category=windows');
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                40%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Windows 11 Pro - Genuine Activation Key</a>
            </h1>

            <p>
              Get the latest Windows operating system with enhanced security features, improved performance, and modern interface.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="/shop-with-sidebar?category=windows"
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue"
              >
                Shop Now
              </a>
              
              <button
                onClick={handleCategoryClick}
                className="inline-flex items-center font-medium text-dark text-custom-sm rounded-md bg-gray-2 py-3 px-5 ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <span className="mr-2">Windows Category</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/dxrerwrjk/image/upload/v1739648635/windows-11-pro-5-pc-1_fxkjzp.png"
              alt="Windows 11 Pro"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Windows 10 Pro - Genuine License</a>
            </h1>

            <p>
              Reliable and secure Windows 10 Pro with all the essential features for business and personal computing needs.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="/shop-with-sidebar?category=windows"
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue"
              >
                Shop Now
              </a>
              
              <button
                onClick={handleCategoryClick}
                className="inline-flex items-center font-medium text-dark text-custom-sm rounded-md bg-gray-2 py-3 px-5 ease-out duration-200 hover:bg-blue hover:text-white"
              >
                <span className="mr-2">Windows Category</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/dxrerwrjk/image/upload/v1739648634/Windows-10-Professional-Activation-key-250x310_nucmwv.png"
              alt="Windows 10 Pro"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
