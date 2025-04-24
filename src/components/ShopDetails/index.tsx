"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "./RecentlyViewd";
import { usePreviewSlider } from "@/app/context/PreviewSliderContext";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import products from "@/contents/products.json";

const ShopDetails = () => {
  const { openPreviewModal } = usePreviewSlider();
  const [previewImg, setPreviewImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tabOne");
  const searchParams = useSearchParams();
  const productName = searchParams.get("name");

  const dispatch = useDispatch<AppDispatch>();

  // Define tabs
  const tabs = [
    { id: "tabOne", title: "Description" },
    { id: "tabTwo", title: "Additional Information" },
    { id: "tabThree", title: "Reviews" },
  ];

  // Find the matching product from products.json
  const currentProduct = products.data.find((p) => p.name === productName);

  // Get product from localStorage or redux store as fallback
  const productFromStorage = localStorage.getItem("productDetails");
  const productFromRedux = useAppSelector(
    (state) => state.productDetailsReducer.value
  );
  const product =
    currentProduct ||
    (productFromStorage ? JSON.parse(productFromStorage) : productFromRedux);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id || Date.now(),
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      category: product.category,
      imgs: {
        thumbnails: product.imgs?.thumbnails || [],
        previews: product.imgs?.previews || [],
      },
    };

    dispatch(addItemToCart(cartItem));
  };

  const handlePreviewSlider = () => {
    openPreviewModal();
  };

  // Product description based on category
  const getProductDescription = () => {
    if (product.category === "Windows") {
      return `${product.title} is a genuine Microsoft Windows license key that provides you with a legitimate copy of the Windows operating system. This product includes:

• Genuine Microsoft product key
• Digital download link
• Instant email delivery
• Full version (not upgrade)
• Lifetime activation for 1 PC
• Official Microsoft support
• All Windows updates

System Requirements:
• Processor: 1 GHz or faster
• RAM: 2 GB for 64-bit
• Hard disk space: 20 GB
• Graphics card: DirectX 9 or later with WDDM 1.0 driver
• Display: 800x600 resolution`;
    }
    return "Product description not available";
  };

  return (
    <>
      <Breadcrumb title={"Shop Details"} pages={["shop details"]} />
      {!product || product.title === "" ? (
        <div className="text-center py-20">
          Please select a product to view details
        </div>
      ) : (
        <>
          <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
                {/* Product Image Section */}
                <div className="lg:max-w-[570px] w-full">
                  <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                    <div>
                      <button
                        onClick={handlePreviewSlider}
                        aria-label="button for zoom"
                        className="gallery__Image w-11 h-11 rounded-[5px] bg-gray-1 shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-6 right-4 lg:right-6 z-50"
                      >
                        <svg
                          className="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.11493 1.14581L9.16665 1.14581C9.54634 1.14581 9.85415 1.45362 9.85415 1.83331C9.85415 2.21301 9.54634 2.52081 9.16665 2.52081C7.41873 2.52081 6.17695 2.52227 5.23492 2.64893C4.31268 2.77292 3.78133 3.00545 3.39339 3.39339C3.00545 3.78133 2.77292 4.31268 2.64893 5.23492C2.52227 6.17695 2.52081 7.41873 2.52081 9.16665C2.52081 9.54634 2.21301 9.85415 1.83331 9.85415C1.45362 9.85415 1.14581 9.54634 1.14581 9.16665L1.14581 9.11493C1.14581 7.58939 1.14581 6.43854 1.29553 5.51408C1.45702 4.51708 1.81364 3.65445 2.51386 2.95422C3.21409 2.254 4.07672 1.89738 5.07372 1.73589C5.99818 1.58617 7.14903 1.58617 8.67457 1.58617L9.11493 1.14581ZM9.11493 20.8542L9.16665 20.8542C9.54634 20.8542 9.85415 20.5464 9.85415 20.1667C9.85415 19.787 9.54634 19.4792 9.16665 19.4792C7.41873 19.4792 6.17695 19.4777 5.23492 19.3511C4.31268 19.2271 3.78133 18.9946 3.39339 18.6066C3.00545 18.2187 2.77292 17.6873 2.64893 16.7651C2.52227 15.8231 2.52081 14.5813 2.52081 12.8333C2.52081 12.4537 2.21301 12.1458 1.83331 12.1458C1.45362 12.1458 1.14581 12.4537 1.14581 12.8333L1.14581 12.8851C1.14581 14.4106 1.14581 15.5615 1.29553 16.4859C1.45702 17.4829 1.81364 18.3456 2.51386 19.0458C3.21409 19.746 4.07672 20.1026 5.07372 20.2641C5.99818 20.4138 7.14903 20.4138 8.67457 20.4138L9.11493 20.8542ZM12.8851 1.14581C14.4106 1.14581 15.5615 1.14581 16.4859 1.29553C17.4829 1.45702 18.3456 1.81364 19.0458 2.51386C19.746 3.21409 20.1026 4.07672 20.2641 5.07372C20.4138 5.99818 20.4138 7.14903 20.4138 8.67457L20.8542 9.11493L20.8542 9.16665C20.8542 9.54634 20.5464 9.85415 20.1667 9.85415C19.787 9.85415 19.4792 9.54634 19.4792 9.16665C19.4792 7.41873 19.4777 6.17695 19.3511 5.23492C19.2271 4.31268 18.9946 3.78133 18.6066 3.39339C18.2187 3.00545 17.6873 2.77292 16.7651 2.64893C15.8231 2.52227 14.5813 2.52081 12.8333 2.52081C12.4537 2.52081 12.1458 2.21301 12.1458 1.83331C12.1458 1.45362 12.4537 1.14581 12.8333 1.14581L12.8851 1.14581ZM12.8851 20.8542C14.4106 20.8542 15.5615 20.8542 16.4859 20.7045C17.4829 20.543 18.3456 20.1864 19.0458 19.4861C19.746 18.7859 20.1026 17.9233 20.2641 16.9263C20.4138 16.0018 20.4138 14.851 20.4138 13.3254L20.8542 12.8851L20.8542 12.8333C20.8542 12.4537 20.5464 12.1458 20.1667 12.1458C19.787 12.1458 19.4792 12.4537 19.4792 12.8333C19.4792 14.5813 19.4777 15.8231 19.3511 16.7651C19.2271 17.6873 18.9946 18.2187 18.6066 18.6066C18.2187 18.9946 17.6873 19.2271 16.7651 19.3511C15.8231 19.4777 14.5813 19.4792 12.8333 19.4792C12.4537 19.4792 12.1458 19.787 12.1458 20.1667C12.1458 20.5464 12.4537 20.8542 12.8333 20.8542L12.8851 20.8542Z"
                            fill=""
                          />
                        </svg>
                      </button>

                      <Image
                        src={product.imgs?.previews[previewImg]}
                        alt={product.title}
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                    {product.imgs?.thumbnails.map((item, key) => (
                      <button
                        onClick={() => setPreviewImg(key)}
                        key={key}
                        className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-blue ${
                          key === previewImg
                            ? "border-blue"
                            : "border-transparent"
                        }`}
                      >
                        <Image
                          width={50}
                          height={50}
                          src={item}
                          alt={`${product.title} thumbnail ${key + 1}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info Section */}
                <div className="max-w-[539px] w-full">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                      {product.title}
                    </h2>
                    <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                      {Math.round(
                        ((product.price - product.discountedPrice) /
                          product.price) *
                          100
                      )}
                      % OFF
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <svg
                            key={index}
                            className="fill-[#FFA645]"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.325 7.25625 17.1844 6.77812 16.7906 6.72187Z"
                            />
                          </svg>
                        ))}
                      </div>
                      <span>({product.reviews} Reviews)</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_375_9221)">
                          <path
                            d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                            fill="#22AD5C"
                          />
                          <path
                            d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                            fill="#22AD5C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_375_9221">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-green">In Stock</span>
                    </div>
                  </div>

                  <h3 className="font-medium text-custom-1 mb-4.5">
                    <span className="text-sm sm:text-base text-dark">
                      Price: ${product.discountedPrice}
                    </span>
                    <span className="line-through ml-2">${product.price}</span>
                  </h3>

                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                          fill="#3C50E0"
                        />
                      </svg>
                      Free delivery available
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                          fill="#3C50E0"
                        />
                      </svg>
                      Sales 30% Off Use Code: PROMO30
                    </li>
                  </ul>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-wrap items-center gap-4.5">
                      <div className="flex items-center rounded-md border border-gray-3">
                        <button
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                          aria-label="button for remove product"
                          className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                        >
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                              fill=""
                            />
                          </svg>
                        </button>

                        <span className="flex items-center justify-center w-16 h-12 border-x border-gray-4">
                          {quantity}
                        </span>

                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          aria-label="button for add product"
                          className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-blue"
                        >
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>

                      <button
                        onClick={() => handleAddToCart()}
                        className="inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden bg-gray-2 py-20">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
              <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
                {tabs.map((item, key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(item.id)}
                    className={`font-medium lg:text-lg ease-out duration-200 hover:text-blue relative before:h-0.5 before:bg-blue before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${
                      activeTab === item.id
                        ? "text-blue before:w-full"
                        : "text-dark before:w-0"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div>
                <div
                  className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
                    activeTab === "tabOne" ? "flex" : "hidden"
                  }`}
                >
                  <div className="max-w-[670px] w-full">
                    <h2 className="font-medium text-2xl text-dark mb-7">
                      Product Description:
                    </h2>
                    <div className="prose max-w-none">
                      {getProductDescription()}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-xl bg-white shadow-1 p-4 sm:p-6 mt-10 ${
                  activeTab === "tabTwo" ? "block" : "hidden"
                }`}
              >
                {/* Additional Information */}
                <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                  <div className="max-w-[450px] min-w-[140px] w-full">
                    <p className="text-sm sm:text-base text-dark">Category</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm sm:text-base text-dark">
                      {product.category}
                    </p>
                  </div>
                </div>

                <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                  <div className="max-w-[450px] min-w-[140px] w-full">
                    <p className="text-sm sm:text-base text-dark">
                      License Type
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm sm:text-base text-dark">
                      Digital License Key
                    </p>
                  </div>
                </div>

                <div className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                  <div className="max-w-[450px] min-w-[140px] w-full">
                    <p className="text-sm sm:text-base text-dark">Delivery</p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm sm:text-base text-dark">
                      Instant Email Delivery
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${
                  activeTab === "tabThree" ? "flex" : "hidden"
                }`}
              >
                <div className="max-w-[570px] w-full">
                  <h2 className="font-medium text-2xl text-dark mb-9">
                    Customer Reviews
                  </h2>
                  <div className="flex flex-col gap-6">
                    <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <span key={index} className="text-[#FBB040]">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-dark mt-4">
                        "Great product and fast delivery. The license key worked
                        perfectly!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RecentlyViewdItems />
          <Newsletter />
        </>
      )}
    </>
  );
};

export default ShopDetails;
