import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} pages={["about"]} />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-light-5 via-white to-red-light-6">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted Since 2020
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-red">AllKeysSale</span>
              </h1>
              
              <p className="text-lg text-gray-6 mb-8 leading-relaxed">
                Your trusted partner for authentic software licenses. We provide genuine, 
                cost-effective software solutions to individuals and businesses worldwide, 
                ensuring you get the best value without compromising on quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop-without-sidebar" className="inline-flex items-center justify-center gap-2 bg-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-dark transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Browse Products
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-gray-4 text-gray-7 px-8 py-3 rounded-lg font-medium hover:border-gray-5 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Support
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-light to-red rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-light-6 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-dark">100K+</div>
                      <div className="text-sm text-gray-6">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-light-5 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-dark">99.9%</div>
                      <div className="text-sm text-gray-6">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-light-2 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-dark">24/7</div>
                      <div className="text-sm text-gray-6">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-light-6 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-dark">4.9★</div>
                      <div className="text-sm text-gray-6">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-6 max-w-3xl mx-auto">
              We believe everyone deserves access to legitimate software at affordable prices. 
              Our mission is to bridge the gap between software manufacturers and end-users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-gradient-to-br from-blue-light-5 to-blue-light-4 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-6 leading-relaxed">
                To democratize access to premium software by providing authentic licenses at 
                competitive prices, enabling individuals and businesses to achieve their digital 
                goals without breaking the bank.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-light-6 to-red-light-5 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-6 leading-relaxed">
                To become the world&apos;s most trusted marketplace for software licenses, 
                known for our integrity, customer service, and commitment to making 
                technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-1">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Why Choose AllKeysSale?
            </h2>
            <p className="text-lg text-gray-6 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to authenticity, 
              customer satisfaction, and unmatched service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-light-6 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.586-4.586a2 2 0 112.828 2.828L9 20.414l-6-6L7.586 9l1.414 1.414z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">100% Authentic</h3>
              <p className="text-gray-6 leading-relaxed">
                All our software licenses are genuine and sourced directly from authorized 
                distributors. No pirated or counterfeit products.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-light-5 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Secure Transactions</h3>
              <p className="text-gray-6 leading-relaxed">
                Your payments are protected with SSL encryption and we support multiple 
                secure payment methods for your convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-light-2 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Instant Delivery</h3>
              <p className="text-gray-6 leading-relaxed">
                Get your activation keys delivered to your email immediately after purchase. 
                No waiting, no delays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-light-6 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4l4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">24/7 Support</h3>
              <p className="text-gray-6 leading-relaxed">
                Our dedicated support team is available round the clock to assist you 
                with any questions or technical issues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-light-6 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Money-Back Guarantee</h3>
              <p className="text-gray-6 leading-relaxed">
                Not satisfied with your purchase? We offer a 30-day money-back guarantee 
                for your peace of mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-light-5 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Best Prices</h3>
              <p className="text-gray-6 leading-relaxed">
                We offer competitive pricing on all software licenses, helping you save 
                money without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-gray-6 max-w-3xl mx-auto">
              Join over 100,000 satisfied customers who have chosen AllKeysSale for their software needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-light-6 to-green-light-5 rounded-xl">
              <div className="text-4xl font-bold text-green mb-2">100K+</div>
              <div className="text-sm text-gray-6">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-xl">
              <div className="text-4xl font-bold text-blue mb-2">500K+</div>
              <div className="text-sm text-gray-6">Licenses Sold</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 rounded-xl">
              <div className="text-4xl font-bold text-yellow mb-2">4+ Years</div>
              <div className="text-sm text-gray-6">In Business</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-light-6 to-red-light-5 rounded-xl">
              <div className="text-4xl font-bold text-red mb-2">99.8%</div>
              <div className="text-sm text-gray-6">Customer Satisfaction</div>
            </div>
          </div>

          {/* Security Badges */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3 bg-gray-1 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium text-gray-7">SSL Secured</span>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-1 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.586-4.586a2 2 0 112.828 2.828L9 20.414l-6-6L7.586 9l1.414 1.414z" />
              </svg>
              <span className="font-medium text-gray-7">Verified Seller</span>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-1 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-medium text-gray-7">4.9★ Rated</span>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-1 px-6 py-3 rounded-lg">
              <svg className="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-medium text-gray-7">Customer Love</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue to-red">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover why AllKeysSale 
              is the trusted choice for software licenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop-without-sidebar" className="inline-flex items-center justify-center gap-2 bg-white text-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Now
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;