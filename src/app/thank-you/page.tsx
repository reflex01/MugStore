import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You for Your Purchase | MugsStore",
  description: "Thank you for your order! Your purchase has been confirmed and will be processed shortly.",
  keywords: "order confirmation, thank you, purchase confirmation, mugs order",
  robots: {
    index: false,
    follow: true,
  },
};

const ThankYouPage = () => {
  return (
    <main className="overflow-hidden">
      {/* Breadcrumb */}
      <section className="bg-gray-1 py-8 xl:py-12">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="text-dark hover:text-blue ease-out duration-200">
              Home
            </Link>
            <span className="text-gray-4">/</span>
            <span className="text-blue">Thank You</span>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-17.5 xl:py-22.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-3xl xl:text-custom-1 font-bold text-dark mb-4">
              Thank You for Your Order!
            </h1>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Your order has been successfully placed and is being processed. You will receive an email confirmation shortly with your order details
            </p>

            {/* Order Details */}
            <div className="bg-blue-light rounded-lg p-8 xl:p-12 mb-12 max-w-2xl mx-auto">
              <h2 className="text-xl font-bold text-dark mb-6">
                What happens next?
              </h2>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue text-white rounded-full mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">Check Your Email</h3>
                <p className="text-black text-lg">
                  You will receive an email with detailed instructions on how to proceed with your order within the next few minutes.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYouPage;