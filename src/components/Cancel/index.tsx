"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  X, 
  RefreshCw, 
  ShoppingCart,
  Shield
} from "lucide-react";

const Cancel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(5);
  
  // Get payment details from URL params if available
  const amount = searchParams.get("amount");
  const productName = searchParams.get("product");


  // Auto redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "https://www.keyhubonline.com/shop";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);


  return (
    <>
      {/* Main Cancel Section */}
      <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-red-light-6 to-red-light-5 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-3 p-6 sm:p-8 lg:p-12 text-center">
            
            {/* Cancel Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-light-6 rounded-full">
                <X className="w-16 h-16 text-yellow" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4">
              Payment Cancelled
            </h1>

            {/* Cancel Message */}
            <p className="text-lg text-gray-6 mb-6 leading-relaxed max-w-2xl mx-auto">
              Your payment has been cancelled. No charges have been made to your account.
            </p>

            {/* Payment Details if available */}
            {(productName || amount) && (
              <div className="bg-gray-1 rounded-xl p-4 sm:p-6 mb-8 max-w-md mx-auto">
                <h3 className="font-semibold text-dark mb-3">Payment Details</h3>
                {productName && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-6">Product:</span>
                    <span className="font-medium text-dark">{decodeURIComponent(productName)}</span>
                  </div>
                )}
                {amount && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-6">Amount:</span>
                    <span className="font-medium text-dark">${amount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-gray-6">Status:</span>
                  <span className="font-medium text-red">
                    Cancelled
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://www.keyhubonline.com/shop"
                className="inline-flex items-center justify-center gap-2 bg-gray-1 hover:bg-gray-2 text-dark font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                Continue Shopping
              </a>
            </div>

            {/* Auto Redirect Notice */}
            <div className="bg-blue-light-5 border border-blue-light-3 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-blue-dark">
                <RefreshCw className="w-5 h-5" />
                <span className="font-medium">
                  Redirecting to shop in {countdown} seconds...
                </span>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-light-6 border border-green-light-3 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-green-dark mb-1">Your Information is Safe</h4>
                  <p className="text-sm text-green-dark">
                    No charges were made to your account. All your payment information remains secure and encrypted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cancel;