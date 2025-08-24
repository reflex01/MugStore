import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";

const TermsAndConditions = () => {
  const lastUpdated = "December 6, 2024";

  return (
    <>
      <Breadcrumb title={"Terms & Conditions"} pages={["terms"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-light-5 via-white to-yellow-light-4">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Legal Agreement
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-yellow">Conditions</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              Please read these Terms and Conditions carefully before using MugsStore&apos;s services. 
              By accessing our platform, you agree to be bound by these terms.
            </p>

            <div className="inline-flex items-center gap-2 bg-gray-1 px-4 py-2 rounded-lg text-sm text-gray-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Terms Overview
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Key points about using our services and your legal obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-xl">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Legal Agreement</h3>
              <p className="text-gray-6 text-sm">Binding contract between you and MugsStore</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-light-6 to-green-light-5 rounded-xl">
              <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">User Rights</h3>
              <p className="text-gray-6 text-sm">Your rights and responsibilities as a user</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 rounded-xl">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h8a2 2 0 002-2v-2M7 13h10m-5-5v5" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Product Terms</h3>
              <p className="text-gray-6 text-sm">Mug product terms and warranty information</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-light-6 to-red-light-5 rounded-xl">
              <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Limitations</h3>
              <p className="text-gray-6 text-sm">Service limitations and liability disclaimers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="py-16 lg:py-20 bg-gray-1">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-2xl shadow-2 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Table of Contents */}
              <div className="bg-blue-light-5 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-dark mb-4">Table of Contents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <a href="#acceptance" className="text-blue hover:text-blue-dark transition-colors">1. Acceptance of Terms</a>
                  <a href="#definitions" className="text-blue hover:text-blue-dark transition-colors">2. Definitions</a>
                  <a href="#services" className="text-blue hover:text-blue-dark transition-colors">3. Services Description</a>
                  <a href="#user-accounts" className="text-blue hover:text-blue-dark transition-colors">4. User Accounts</a>
                  <a href="#license-terms" className="text-blue hover:text-blue-dark transition-colors">5. Product Warranty Terms</a>
                  <a href="#payment-terms" className="text-blue hover:text-blue-dark transition-colors">6. Payment and Billing</a>
                  <a href="#user-conduct" className="text-blue hover:text-blue-dark transition-colors">7. User Conduct</a>
                  <a href="#intellectual-property" className="text-blue hover:text-blue-dark transition-colors">8. Intellectual Property</a>
                  <a href="#disclaimers" className="text-blue hover:text-blue-dark transition-colors">9. Disclaimers</a>
                  <a href="#limitation-liability" className="text-blue hover:text-blue-dark transition-colors">10. Limitation of Liability</a>
                  <a href="#indemnification" className="text-blue hover:text-blue-dark transition-colors">11. Indemnification</a>
                  <a href="#termination" className="text-blue hover:text-blue-dark transition-colors">12. Termination</a>
                  <a href="#governing-law" className="text-blue hover:text-blue-dark transition-colors">13. Governing Law</a>
                  <a href="#modifications" className="text-blue hover:text-blue-dark transition-colors">14. Modifications</a>
                  <a href="#contact" className="text-blue hover:text-blue-dark transition-colors">15. Contact Information</a>
                </div>
              </div>

              {/* 1. Acceptance of Terms */}
              <section id="acceptance" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Acceptance of Terms
                </h2>
                
                <div className="bg-blue-light-5 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Agreement to Terms</h3>
                  <p className="text-gray-6">
                    By accessing and using MugsStore&apos;s website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-6">
                    These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and MugsStore (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) regarding your use of our website, services, and online mug store.
                  </p>
                  <p className="text-gray-6">
                    If you do not agree with these Terms, you must not access or use our services. Your continued use of our services following any changes to these Terms constitutes acceptance of those changes.
                  </p>
                  <p className="text-gray-6">
                    You must be at least 18 years old or have reached the age of majority in your jurisdiction to use our services. By using our services, you represent and warrant that you meet this age requirement.
                  </p>
                </div>
              </section>

              {/* 2. Definitions */}
              <section id="definitions" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Definitions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-light-6 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Key Terms</h3>
                    <div className="space-y-3 text-gray-6">
                      <div><strong>&quot;Services&quot;:</strong> MugsStore&apos;s online mug store platform and related services</div>
                      <div><strong>&quot;Products&quot;:</strong> Mugs, drinkware, and related items offered through our platform</div>
                      <div><strong>&quot;Order&quot;:</strong> A purchase request for mugs or other products from our store</div>
                      <div><strong>&quot;User Account&quot;:</strong> Your registered account on our platform</div>
                    </div>
                  </div>

                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Service Terms</h3>
                    <div className="space-y-3 text-gray-6">
                      <div><strong>&quot;Content&quot;:</strong> All text, graphics, data, and materials on our website</div>
                      <div><strong>&quot;Third Party&quot;:</strong> Manufacturers, suppliers, and other service providers</div>
                      <div><strong>&quot;Shipping&quot;:</strong> Physical delivery of products to your specified address</div>
                      <div><strong>&quot;Customer&quot;:</strong> The person purchasing mugs through our platform</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Services Description */}
              <section id="services" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Services Description
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Our Services</h3>
                  <p className="text-gray-6">
                    MugsStore operates as an online retailer of premium mugs and drinkware, connecting customers with high-quality ceramic and porcelain products.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-2">Product Catalog</h4>
                    <p className="text-gray-6">We provide an online platform for purchasing premium mugs and drinkware from various manufacturers and artisans.</p>
                  </div>

                  <div className="border-l-4 border-green pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-2">Physical Delivery</h4>
                    <p className="text-gray-6">Upon successful payment, we carefully package and ship your mugs to your specified delivery address.</p>
                  </div>

                  <div className="border-l-4 border-red pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-2">Customer Support</h4>
                    <p className="text-gray-6">We provide customer support for order tracking, product care instructions, and general inquiries about our services.</p>
                  </div>

                  <div className="border-l-4 border-yellow pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-2">Service Limitations</h4>
                    <p className="text-gray-6">We are a retailer. While we carefully select our products, we rely on manufacturers for quality control and may have limited control over product defects.</p>
                  </div>
                </div>
              </section>

              {/* 4. User Accounts */}
              <section id="user-accounts" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                  User Accounts
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-4">Account Creation</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Provide accurate and complete information</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Use a valid email address for communications</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Choose a secure password</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Maintain one account per person</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-4">Account Responsibilities</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-red" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Keep login credentials secure and confidential</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-red" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Immediately notify us of unauthorized access</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-red" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Update account information when changes occur</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-red" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Accept responsibility for all account activity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Product Warranty Terms */}
              <section id="license-terms" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
                  Product Warranty Terms
                </h2>
                
                <div className="bg-blue-light-5 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">⚠️ Important Notice</h3>
                  <p className="text-gray-6">
                    <strong>MugsStore is a retailer of premium mugs and drinkware.</strong> All products come with our standard warranty against manufacturing defects. We stand behind the quality of our products.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-light-6 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">What You Receive</h4>
                      <ul className="list-disc list-inside text-gray-6 space-y-2">
                        <li>High-quality ceramic or porcelain mug</li>
                        <li>Care and maintenance instructions</li>
                        <li>Warranty documentation</li>
                        <li>Customer support for product issues</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-light-4 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">Product Care</h4>
                      <ul className="list-disc list-inside text-gray-6 space-y-2">
                        <li>Dishwasher safe (top rack recommended)</li>
                        <li>Microwave safe for reheating beverages</li>
                        <li>Avoid extreme temperature changes</li>
                        <li>Handle with care to prevent chips or cracks</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Product Quality and Authenticity</h4>
                    <p className="text-gray-6 mb-3">We guarantee that all mugs sold through our platform are:</p>
                    <ul className="list-disc list-inside text-gray-6 space-y-1 ml-4">
                      <li>Made from genuine ceramic or porcelain materials</li>
                      <li>Free from manufacturing defects at time of sale</li>
                      <li>Brand new and unused condition</li>
                      <li>Accompanied by proper care instructions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Support Limitations</h4>
                    <p className="text-gray-6">
                      Our support covers order processing, shipping issues, and product defects. For care instructions and warranty claims, please contact us within 30 days of purchase.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Payment and Billing */}
              <section id="payment-terms" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">6</span>
                  Payment and Billing
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-green-light-6 rounded-xl">
                    <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-dark mb-2">Secure Payments</h3>
                    <p className="text-gray-6 text-sm">SSL encrypted payment processing with major credit cards and PayPal</p>
                  </div>

                  <div className="text-center p-6 bg-blue-light-5 rounded-xl">
                    <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-dark mb-2">Instant Processing</h3>
                    <p className="text-gray-6 text-sm">Immediate license delivery upon successful payment verification</p>
                  </div>

                  <div className="text-center p-6 bg-yellow-light-4 rounded-xl">
                    <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-dark mb-2">No Hidden Fees</h3>
                    <p className="text-gray-6 text-sm">Transparent pricing with all taxes and fees clearly displayed</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-1 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Payment Terms</h4>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>All payments must be made in full before license delivery</li>
                      <li>Prices are listed in USD and include applicable taxes</li>
                      <li>Payment methods accepted: Major credit cards, PayPal, and bank transfers</li>
                      <li>Failed payments may result in order cancellation</li>
                      <li>Currency conversion fees may apply for international payments</li>
                    </ul>
                  </div>

                  <div className="bg-gray-1 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Refund Policy</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-dark mb-2">Eligible for Refund:</h5>
                        <ul className="list-disc list-inside text-gray-6 text-sm space-y-1">
                          <li>Damaged products received in poor condition</li>
                          <li>Duplicate purchases made in error</li>
                          <li>Manufacturing defects or quality issues</li>
                          <li>Billing errors or unauthorized charges</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-dark mb-2">Not Eligible for Refund:</h5>
                        <ul className="list-disc list-inside text-gray-6 text-sm space-y-1">
                          <li>Products used and showing normal wear</li>
                          <li>Change of mind after 14 days</li>
                          <li>Damage due to misuse or accidents</li>
                          <li>Purchases older than 30 days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Continue with remaining sections... */}
              {/* 7. User Conduct */}
              <section id="user-conduct" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">7</span>
                  User Conduct and Prohibited Activities
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">🚫 Prohibited Activities</h3>
                  <p className="text-gray-6">
                    The following activities are strictly prohibited and may result in immediate account termination and legal action.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark mb-4">Illegal Activities</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Reselling products as new after use</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Using fraudulent payment methods</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Attempting to return damaged items as defective</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Filing false warranty claims</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-dark mb-4">Platform Misuse</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Creating multiple accounts to circumvent restrictions</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Attempting to hack or compromise our systems</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Spamming or sending unsolicited communications</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-6">Providing false information in disputes or claims</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-red-light-6 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-dark mb-3">Consequences of Violations</h4>
                  <p className="text-gray-6 mb-3">Violations of these terms may result in:</p>
                  <ul className="list-disc list-inside text-gray-6 space-y-1 ml-4">
                    <li>Immediate account suspension or termination</li>
                    <li>Forfeiture of purchased licenses and refunds</li>
                    <li>Legal action for damages and recovery of costs</li>
                    <li>Reporting to relevant law enforcement authorities</li>
                    <li>Blacklisting from future services</li>
                  </ul>
                </div>
              </section>

              {/* 8. Intellectual Property */}
              <section id="intellectual-property" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">8</span>
                  Intellectual Property Rights
                </h2>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-light-5 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">Our Intellectual Property</h4>
                      <p className="text-gray-6 mb-3">AllKeysSale owns or licenses:</p>
                      <ul className="list-disc list-inside text-gray-6 space-y-1 text-sm">
                        <li>Website design and functionality</li>
                        <li>AllKeysSale brand and trademarks</li>
                        <li>Proprietary designs and systems</li>
                        <li>Content, text, and graphics</li>
                        <li>Marketing materials and documentation</li>
                      </ul>
                    </div>

                    <div className="bg-green-light-6 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">Third-Party IP</h4>
                      <p className="text-gray-6 mb-3">Mug manufacturers retain rights to:</p>
                      <ul className="list-disc list-inside text-gray-6 space-y-1 text-sm">
                        <li>Mug designs and patterns</li>
                        <li>Product names and trademarks</li>
                        <li>Documentation and user guides</li>
                        <li>Updates and modifications</li>
                        <li>Related intellectual property</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">License to Use Our Platform</h4>
                    <p className="text-gray-6 mb-3">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our platform for personal or business purposes in accordance with these Terms.
                    </p>
                    <p className="text-gray-6">
                      This license does not permit you to copy, modify, distribute, sell, or create derivative works of our platform or content.
                    </p>
                  </div>

                  <div className="border-l-4 border-red pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Copyright and Trademark Protection</h4>
                    <p className="text-gray-6 mb-3">
                      All content on our platform is protected by copyright, trademark, and other intellectual property laws. Unauthorized use is strictly prohibited.
                    </p>
                    <p className="text-gray-6">
                      If you believe your intellectual property rights have been violated, please contact us immediately with detailed information about the alleged infringement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Continue with more sections... */}
              {/* For brevity, I'll add the key remaining sections */}

              {/* 9. Disclaimers */}
              <section id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">9</span>
                  Disclaimers and Warranties
                </h2>
                
                <div className="bg-blue-light-5 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">⚠️ Important Disclaimer</h3>
                  <p className="text-gray-6">
                    <strong>OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.</strong> 
                    Please read these disclaimers carefully as they limit our liability.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-1 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Service Availability</h4>
                    <p className="text-gray-6">
                      We do not guarantee uninterrupted availability of our services. Maintenance, updates, technical issues, 
                      or factors beyond our control may cause temporary service disruptions.
                    </p>
                  </div>

                  <div className="bg-gray-1 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Product Suitability</h4>
                    <p className="text-gray-6">
                      We are not responsible for product suitability for specific beverage preferences or personal taste. 
                      Users should review product descriptions and specifications before purchase.
                    </p>
                  </div>

                  <div className="bg-gray-1 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Third-Party Services</h4>
                    <p className="text-gray-6">
                      We disclaim all responsibility for third-party services, including manufacturers, 
                      payment processors, and shipping carriers integrated with our platform.
                    </p>
                  </div>
                </div>
              </section>

              {/* 10. Limitation of Liability */}
              <section id="limitation-liability" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">10</span>
                  Limitation of Liability
                </h2>
                
                <div className="bg-red-light-6 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">🛡️ Liability Limitations</h3>
                  <p className="text-gray-6">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, MUGSSTORE&apos;S LIABILITY IS LIMITED AS DESCRIBED BELOW.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-red pl-6">
                    <h4 className="font-semibold text-dark mb-2">Maximum Liability Cap</h4>
                    <p className="text-gray-6">
                      Our total liability for any claims arising from your use of our services shall not exceed 
                      the amount you paid to us in the 12 months preceding the claim.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow pl-6">
                    <h4 className="font-semibold text-dark mb-2">Excluded Damages</h4>
                    <p className="text-gray-6">
                      We shall not be liable for indirect, incidental, special, consequential, or punitive damages, 
                      including lost profits, data loss, or business interruption.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-6">
                    <h4 className="font-semibold text-dark mb-2">Time Limitations</h4>
                    <p className="text-gray-6">
                      Any claim against us must be filed within one (1) year of the date the claim arose, 
                      or it will be permanently barred.
                    </p>
                  </div>
                </div>
              </section>

              {/* Remaining sections abbreviated for space... */}
              {/* 11. Indemnification */}
              <section id="indemnification" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">11</span>
                  Indemnification
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6">
                  <p className="text-gray-6">
                    You agree to indemnify and hold harmless MugsStore from any claims, damages, losses, or expenses 
                    arising from your violation of these Terms, misuse of our services, or violation of any third-party rights.
                  </p>
                </div>
              </section>

              {/* 12. Termination */}
              <section id="termination" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">12</span>
                  Termination
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-light-6 rounded-lg p-6">
                    <h4 className="font-semibold text-dark mb-3">Termination by Us</h4>
                    <p className="text-gray-6 text-sm">We may terminate your account immediately for violations of these Terms or at our discretion with notice.</p>
                  </div>
                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h4 className="font-semibold text-dark mb-3">Termination by You</h4>
                    <p className="text-gray-6 text-sm">You may terminate your account at any time by contacting our support team.</p>
                  </div>
                </div>
              </section>

              {/* 13. Governing Law */}
              <section id="governing-law" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">13</span>
                  Governing Law and Disputes
                </h2>
                
                <div className="bg-green-light-6 rounded-lg p-6">
                  <p className="text-gray-6">
                    These Terms are governed by the laws of Nevada, United States. Any disputes will be resolved 
                    through binding arbitration in Las Vegas, Nevada, except for claims in small claims court.
                  </p>
                </div>
              </section>

              {/* 14. Modifications */}
              <section id="modifications" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">14</span>
                  Modifications to Terms
                </h2>
                
                <div className="bg-blue-light-5 rounded-lg p-6">
                  <p className="text-gray-6">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
                    Continued use of our services constitutes acceptance of modified Terms.
                  </p>
                </div>
              </section>

              {/* 15. Contact Information */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">15</span>
                  Contact Information
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-4">Questions About These Terms?</h3>
                  <p className="text-gray-6 mb-4">
                    If you have questions about these Terms and Conditions, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Legal Department</h4>
                      <div className="space-y-2 text-gray-6">
                        <p className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          legal@mugsstore.org
                        </p>
                        <p className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Mailing Address</h4>
                      <div className="text-gray-6">
                        <p>MugsStore Legal Department</p>
                        <p>123 Ceramic Avenue</p>
                        <p>Los Angeles, CA 90210</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue to-yellow">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Shop with Confidence?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Now that you understand our terms, explore our extensive collection of premium mugs and drinkware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white text-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-1 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Browse Mugs
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;