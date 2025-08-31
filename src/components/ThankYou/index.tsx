"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Phone, 
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Shield,
  Clock,
  Star,
  Gift,
  ArrowRight,
  Copy,
  FileText
} from "lucide-react";

const ThankYou = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderNumber] = useState(`WIN${Date.now().toString().slice(-8)}`);
  
  // Get success details from URL params
  const sessionId = searchParams.get("session_id");
  const amount = searchParams.get("amount");
  const productName = searchParams.get("product");
  const customerEmail = searchParams.get("email");

  const handleCopyOrderNumber = () => {
    navigator.clipboard.writeText(orderNumber);
    // You could add a toast notification here
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace("https://www.keyhubonline.com/thank-you");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main Success Section */}
      <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-green-light-6 to-blue-light-5 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-3 p-6 sm:p-8 lg:p-12 text-center">
            
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-light-6 rounded-full">
                <CheckCircle className="w-16 h-16 text-green" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4">
              Thank You for Your Purchase!
            </h1>

            {/* Success Message */}
            <p className="text-lg text-gray-6 mb-6 leading-relaxed max-w-2xl mx-auto">
              Your order has been successfully processed and your digital license will be delivered to your email within the next few minutes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/my-account"
                className="inline-flex items-center justify-center gap-2 bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                View My Orders
              </Link>
              
              <Link
                href="https://www.keyhubonline.com/shop"
                className="inline-flex items-center justify-center gap-2 bg-gray-1 hover:bg-gray-2 text-dark font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                <ShoppingCart className="w-5 h-5" />
                Continue Shopping
              </Link>
            </div>

            {/* Security Notice */}
            <div className="bg-green-light-6 border border-green-light-3 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h4 className="font-semibold text-green-dark mb-1">Your Purchase is Secure</h4>
                  <p className="text-sm text-green-dark">
                    Your payment has been processed securely. You'll receive your genuine license key via email shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Your order is being processed and you'll receive everything you need to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 - Email Delivery */}
            <div className="bg-gray-1 rounded-xl p-6 text-center hover:shadow-2 transition-all duration-200">
              <div className="p-4 bg-blue-light-5 rounded-full w-fit mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue" />
              </div>
              <h3 className="font-bold text-dark mb-2">1. Check Your Email</h3>
              <p className="text-gray-6 mb-4 text-sm">
                You'll receive your product key and installation instructions within 5-10 minutes
              </p>
              <div className="bg-blue-light-5 border border-blue-light-3 rounded-lg p-3">
                <div className="flex items-center justify-center gap-2 text-blue-dark">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium text-xs">Expected: 5-10 minutes</span>
                </div>
              </div>
            </div>

            {/* Step 2 - Download & Install */}
            <div className="bg-gray-1 rounded-xl p-6 text-center hover:shadow-2 transition-all duration-200">
              <div className="p-4 bg-green-light-6 rounded-full w-fit mx-auto mb-4">
                <Download className="w-8 h-8 text-green" />
              </div>
              <h3 className="font-bold text-dark mb-2">2. Download & Install</h3>
              <p className="text-gray-6 mb-4 text-sm">
                Follow the step-by-step instructions to download and activate your software
              </p>
              <div className="bg-green-light-6 border border-green-light-3 rounded-lg p-3">
                <div className="flex items-center justify-center gap-2 text-green-dark">
                  <Gift className="w-4 h-4" />
                  <span className="font-medium text-xs">Free installation support</span>
                </div>
              </div>
            </div>

            {/* Step 3 - Enjoy */}
            <div className="bg-gray-1 rounded-xl p-6 text-center hover:shadow-2 transition-all duration-200">
              <div className="p-4 bg-yellow-light-4 rounded-full w-fit mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-dark" />
              </div>
              <h3 className="font-bold text-dark mb-2">3. Start Using</h3>
              <p className="text-gray-6 mb-4 text-sm">
                Your software is ready to use with lifetime activation and updates
              </p>
              <div className="bg-yellow-light-4 border border-yellow-dark rounded-lg p-3">
                <div className="flex items-center justify-center gap-2 text-yellow-dark-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium text-xs">Lifetime license</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 sm:py-16 bg-gray-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">Need Help?</h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Our support team is here to help you with installation, activation, or any questions you may have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Installation Guide */}
            <div className="bg-white rounded-xl p-6 shadow-2 hover:shadow-3 transition-all duration-200 text-center">
              <div className="p-4 bg-blue-light-5 rounded-full w-fit mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue" />
              </div>
              <h3 className="font-bold text-dark mb-2">Installation Guide</h3>
              <p className="text-gray-6 mb-4 text-sm">
                Step-by-step installation and activation guides
              </p>
              <Link 
                href="/activate-windows-by-phone"
                className="bg-blue hover:bg-blue-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm inline-block"
              >
                View Guides
              </Link>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-xl p-6 shadow-2 hover:shadow-3 transition-all duration-200 text-center">
              <div className="p-4 bg-green-light-6 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green" />
              </div>
              <h3 className="font-bold text-dark mb-2">Live Support</h3>
              <p className="text-gray-6 mb-4 text-sm">
                Get instant help from our technical support team
              </p>
              <button className="bg-green hover:bg-green-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                Start Chat
              </button>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-xl p-6 shadow-2 hover:shadow-3 transition-all duration-200 text-center">
              <div className="p-4 bg-yellow-light-4 rounded-full w-fit mx-auto mb-4">
                <Mail className="w-8 h-8 text-yellow-dark" />
              </div>
              <h3 className="font-bold text-dark mb-2">Email Support</h3>
              <p className="text-gray-6 mb-4 text-sm">
                Send us your questions and get detailed responses
              </p>
              <a 
                href="mailto:support@keyhubonline.com"
                className="bg-yellow hover:bg-yellow-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm inline-block"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">Important Information</h2>
            <p className="text-lg text-gray-6">
              Please keep this information for your records
            </p>
          </div>

          <div className="space-y-6">
            {/* Digital Delivery */}
            <div className="bg-blue-light-5 border border-blue-light-3 rounded-xl p-6">
              <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue" />
                Digital Delivery
              </h3>
              <ul className="list-disc list-inside text-gray-6 space-y-1 text-sm">
                <li>Your product key will be delivered via email within 5-10 minutes</li>
                <li>Check your spam/junk folder if you don't see the email</li>
                <li>The email will include installation instructions and download links</li>
                <li>Keep the email safe as it contains your license information</li>
              </ul>
            </div>

            {/* License Information */}
            <div className="bg-green-light-6 border border-green-light-3 rounded-xl p-6">
              <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green" />
                License Information
              </h3>
              <ul className="list-disc list-inside text-gray-6 space-y-1 text-sm">
                <li>Your license is genuine and comes directly from Microsoft</li>
                <li>Lifetime activation - no subscription required</li>
                <li>Can be used on one computer permanently</li>
                <li>Includes all future updates and security patches</li>
              </ul>
            </div>

            {/* Support Promise */}
            <div className="bg-yellow-light-4 border border-yellow-dark rounded-xl p-6">
              <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-dark" />
                Our Support Promise
              </h3>
              <ul className="list-disc list-inside text-gray-6 space-y-1 text-sm">
                <li>Free installation support for all customers</li>
                <li>24/7 customer service via email and chat</li>
                <li>100% satisfaction guarantee or money back</li>
                <li>Replacement keys provided if needed</li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-light-5 to-green-light-6 rounded-xl p-6 border border-blue-light-3">
              <h3 className="font-bold text-dark mb-2">Questions About Your Order?</h3>
              <p className="text-gray-6 mb-4">
                Our customer success team is standing by to help you get up and running.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;