import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";

const DeliveryPayment = () => {
  return (
    <>
      <Breadcrumb title={"Delivery & Payment"} pages={["delivery-payment"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-green-light-6 via-white to-blue-light-5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-light-6 text-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Fast & Secure
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Delivery & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue">Payment</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              Experience lightning-fast digital delivery and secure payment processing. 
              Get your software activation keys delivered directly to your email within minutes!
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green mb-1">5 Min</div>
                <div className="text-sm text-gray-6">Average Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue mb-1">8 Hrs</div>
                <div className="text-sm text-gray-6">Maximum Wait</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow mb-1">100%</div>
                <div className="text-sm text-gray-6">Digital Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red mb-1">SSL</div>
                <div className="text-sm text-gray-6">Encrypted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              How Digital Delivery Works
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Our automated system ensures fast and reliable delivery of your software activation keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-lg">1</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Complete Purchase</h3>
              <p className="text-gray-6 text-sm">Secure checkout with your preferred payment method</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-lg">2</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Payment Verification</h3>
              <p className="text-gray-6 text-sm">Instant payment processing and fraud protection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-lg">3</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Key Generation</h3>
              <p className="text-gray-6 text-sm">Automated license key assignment and validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-lg">4</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Email Delivery</h3>
              <p className="text-gray-6 text-sm">Secure delivery to your registered email address</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Timeframes */}
      <section className="py-16 lg:py-20 bg-gray-1">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Delivery Timeframes
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Understanding when you&apos;ll receive your software activation keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-2 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green to-green-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Instant Delivery</h3>
              <div className="text-4xl font-bold text-green mb-2">~5 Min</div>
              <p className="text-gray-6 mb-6">Most orders are processed and delivered within 5 minutes of payment confirmation.</p>
              <div className="bg-green-light-6 rounded-lg p-4">
                <p className="text-green font-medium text-sm">✓ 85% of all orders</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow to-yellow-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Standard Delivery</h3>
              <div className="text-4xl font-bold text-yellow mb-2">1-4 Hrs</div>
              <p className="text-gray-6 mb-6">Some orders may require additional verification or manual processing.</p>
              <div className="bg-yellow-light-4 rounded-lg p-4">
                <p className="text-yellow-dark font-medium text-sm">⚡ 14% of all orders</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2 p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red to-red-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Maximum Wait</h3>
              <div className="text-4xl font-bold text-red mb-2">Up to 8 Hrs</div>
              <p className="text-gray-6 mb-6">In rare cases, complex orders or high-demand periods may cause delays.</p>
              <div className="bg-red-light-6 rounded-lg p-4">
                <p className="text-red font-medium text-sm">⏰ 1% of all orders</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-light-5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4 text-center">What if I don&apos;t receive my keys?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Check Your Email</h4>
                  <p className="text-gray-6 text-sm">Look in your inbox, spam, and junk folders for our delivery email</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Contact Support</h4>
                  <p className="text-gray-6 text-sm">Reach out to our 24/7 support team if you haven&apos;t received your keys within 8 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Secure Payment Options
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              We support multiple payment methods to make your purchase convenient and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Credit Cards</h3>
              <p className="text-gray-6 mb-3">Visa, Mastercard, American Express, Discover</p>
              <div className="flex justify-center gap-2">
                <div className="w-8 h-5 bg-blue rounded text-white text-xs flex items-center justify-center">VISA</div>
                <div className="w-8 h-5 bg-red rounded text-white text-xs flex items-center justify-center">MC</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h8.418c2.508 0 4.514.893 5.815 2.513 1.301 1.62 1.76 3.893 1.76 6.353 0 3.036-.725 5.694-2.274 7.369s-3.918 2.497-7.206 2.497H9.83a.58.58 0 0 0-.577.512l-.35 2.066c-.08.519-.527.901-1.051.901z"/>
                  <path d="M23.048 7.272c-.691 3.025-2.434 5.925-6.058 7.416L14.583 24H19.19a.641.641 0 0 0 .633-.74L23.048 7.272z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">PayPal</h3>
              <p className="text-gray-6 mb-3">Secure PayPal payments with buyer protection</p>
              <div className="bg-yellow-light-2 rounded px-3 py-1">
                <span className="text-yellow-dark font-medium text-sm">PayPal</span>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-light-6 to-green-light-5 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h8a2 2 0 002-2v-2M7 13h10m-5-5v5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Bank Transfer</h3>
              <p className="text-gray-6 mb-3">Direct bank transfers for large orders</p>
              <div className="bg-green-light-5 rounded px-3 py-1">
                <span className="text-green font-medium text-sm">ACH/Wire</span>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-light-6 to-red-light-5 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Digital Wallets</h3>
              <p className="text-gray-6 mb-3">Apple Pay, Google Pay, and more</p>
              <div className="flex justify-center gap-1">
                <div className="w-6 h-4 bg-black rounded text-white text-xs flex items-center justify-center">🍎</div>
                <div className="w-6 h-4 bg-blue rounded text-white text-xs flex items-center justify-center">G</div>
              </div>
            </div>
          </div>

          {/* Payment Security */}
          <div className="bg-gray-1 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">Payment Security & Protection</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-light-5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark mb-2">SSL Encryption</h4>
                <p className="text-gray-6 text-sm">256-bit SSL encryption protects all payment data during transmission</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-light-6 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.586-4.586a2 2 0 112.828 2.828L9 20.414l-6-6L7.586 9l1.414 1.414z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark mb-2">PCI Compliance</h4>
                <p className="text-gray-6 text-sm">PCI DSS Level 1 certified payment processing for maximum security</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-light-2 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark mb-2">Fraud Protection</h4>
                <p className="text-gray-6 text-sm">Advanced fraud detection and chargeback protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Information */}
      <section className="py-16 lg:py-20 bg-gray-1">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Billing & Invoicing
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Transparent billing with detailed invoices for all your purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-2 p-8">
                <h3 className="text-xl font-bold text-dark mb-6">What You&apos;ll Receive</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Instant Email Receipt</h4>
                      <p className="text-gray-6 text-sm">Immediate confirmation with payment details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Detailed Invoice</h4>
                      <p className="text-gray-6 text-sm">PDF invoice with all purchase information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">License Keys</h4>
                      <p className="text-gray-6 text-sm">Activation keys with installation instructions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Support Information</h4>
                      <p className="text-gray-6 text-sm">Contact details for technical assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-2 p-8">
                <h3 className="text-xl font-bold text-dark mb-6">Pricing & Taxes</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-dark mb-1">Transparent Pricing</h4>
                    <p className="text-gray-6 text-sm">All prices shown include applicable taxes and fees. No hidden charges.</p>
                  </div>
                  <div className="border-l-4 border-green pl-4">
                    <h4 className="font-semibold text-dark mb-1">Tax Calculation</h4>
                    <p className="text-gray-6 text-sm">Taxes calculated based on your billing address and local regulations.</p>
                  </div>
                  <div className="border-l-4 border-yellow pl-4">
                    <h4 className="font-semibold text-dark mb-1">Currency</h4>
                    <p className="text-gray-6 text-sm">All prices displayed in USD. International cards accepted with conversion.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-light-5 rounded-2xl p-6">
                <h4 className="font-semibold text-dark mb-3">Need Help with Billing?</h4>
                <p className="text-gray-6 text-sm mb-4">Our billing support team is available 24/7 to assist with payment issues.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:billing@allkeyssale.com" className="inline-flex items-center gap-2 text-blue hover:text-blue-dark text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    billing@allkeyssale.com
                  </a>
                  <span className="text-gray-5">|</span>
                  <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-blue hover:text-blue-dark text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Delivery & Payment FAQ
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Common questions about our delivery and payment processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-light-6 to-green-light-5 p-6 rounded-xl">
                <h4 className="font-bold text-dark mb-3">How fast will I receive my software keys?</h4>
                <p className="text-gray-6">Most orders are delivered within 5 minutes of payment confirmation. In some cases, it may take up to 8 hours for manual verification or during high-demand periods.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-light-5 to-blue-light-4 p-6 rounded-xl">
                <h4 className="font-bold text-dark mb-3">What if I don&apos;t receive my keys after 8 hours?</h4>
                <p className="text-gray-6">Contact our 24/7 support team immediately at support@allkeyssale.com or +1 (555) 123-4567. We&apos;ll investigate and resolve the issue promptly.</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 p-6 rounded-xl">
                <h4 className="font-bold text-dark mb-3">Are international payments accepted?</h4>
                <p className="text-gray-6">Yes! We accept international credit cards and PayPal payments. Currency conversion fees may apply depending on your bank or payment provider.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-light-6 to-red-light-5 p-6 rounded-xl">
                <h4 className="font-bold text-dark mb-3">Is my payment information secure?</h4>
                <p className="text-gray-6">Absolutely! We use 256-bit SSL encryption and are PCI DSS Level 1 certified. Your payment data is protected with the highest security standards.</p>
              </div>

              <div className="bg-gradient-to-br from-red-light-6 to-red-light-4 p-6 rounded-xl">
                <h4 className="font-bold text-dark mb-3">Can I get a refund if the key doesn&apos;t work?</h4>
                <p className="text-gray-6">Yes! We offer a 30-day money-back guarantee for non-functional keys. Contact support with your order details for a quick resolution.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-light-4 to-blue-light-3 p-6 rounded-xl">
                <h4 className="font-bold text-dark mb-3">Do you provide invoices for business purchases?</h4>
                <p className="text-gray-6">Yes! All purchases include detailed PDF invoices with VAT/tax information suitable for business accounting and expense reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green to-blue">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Your Software Keys?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience our fast delivery and secure payment process. Get your activation keys within minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white text-green px-8 py-4 rounded-lg font-medium hover:bg-gray-1 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Start Shopping
              </Link>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryPayment;