import Image from "next/image";
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ActivateOfficeByPhone = () => {
  const lastUpdated = "December 6, 2024";

  return (
    <>
      <Breadcrumb 
        title="How to Activate Office by Phone Guide" 
        pages={[
          { name: "Home", href: "/" },
          { name: "Help", href: "#" },
          { name: "Office Activation Guide", href: "/activate-office-by-phone" }
        ]} 
      />
      
      {/* Schema markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Activate Office by Phone",
            "description": "Step-by-step guide to activate Microsoft Office 2019/2016 by phone using two different methods.",
            "image": "/images/activationByPhone/ByPhone.png",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Method 1: Using Get Confirmation ID Online",
                "text": "Use the online confirmation ID service to activate Office",
                "image": "/images/activationByPhone/Method1Photo1.png"
              },
              {
                "@type": "HowToStep", 
                "name": "Method 2: Call Microsoft Center",
                "text": "Call Microsoft directly to get your confirmation ID",
                "image": "/images/activationByPhone/Method2Photo1.png"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-light-6 via-white to-green-light-5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" />
              </svg>
              Office Phone Activation
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              How to Activate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-green">Office by Phone</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete step-by-step guide to activate your Microsoft Office 2019/2016 by phone when online activation fails. 
              Two proven methods with detailed screenshots and instructions.
            </p>

            <div className="inline-flex items-center gap-2 bg-gray-1 px-4 py-2 rounded-lg text-sm text-gray-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: {lastUpdated}
            </div>
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Method 1: Online ID</h3>
              <p className="text-gray-6 text-sm mb-4">Use Microsoft&apos;s online confirmation service</p>
              <div className="bg-red-light-6 text-red px-3 py-2 rounded-lg text-sm font-medium">
                ⚠️ Currently Not Working
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Method 2: Phone Call</h3>
              <p className="text-gray-6 text-sm mb-4">Call Microsoft directly for activation</p>
              <div className="bg-green-light-5 text-green px-3 py-2 rounded-lg text-sm font-medium">
                ✅ Recommended Method
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Activation Guide Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-gray-1 rounded-2xl shadow-2xl p-8 lg:p-12">
            
            {/* Table of Contents */}
            <div className="bg-blue-light-6 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-dark mb-4">Activation Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <a href="#method-1" className="text-blue hover:text-blue-dark transition-colors">1. Online Confirmation ID (Currently Unavailable)</a>
                <a href="#method-2" className="text-blue hover:text-blue-dark transition-colors">2. Call Microsoft Center (Recommended)</a>
                <a href="#faqs" className="text-blue hover:text-blue-dark transition-colors">3. Frequently Asked Questions</a>
                <a href="#contact" className="text-blue hover:text-blue-dark transition-colors">4. Need Help?</a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* Method 1 */}
              <section id="method-1" className="mb-16">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Method 1: Using Get Confirmation ID Online
                </h2>
                
                <div className="bg-red-light-6 border border-red-light-4 rounded-lg p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-lg font-bold text-red">Important Notice</h3>
                  </div>
                  <p className="text-red-dark">This service is currently not working. Microsoft has temporarily disabled the online confirmation ID service. Please use Method 2 below.</p>
                </div>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                      <h3 className="text-xl font-bold text-dark">Start the Activation Process</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-6 mb-4">When you see the activation dialog in Microsoft Office, click NEXT to proceed to the phone activation options.</p>
                        <div className="bg-blue-light-5 p-4 rounded-lg">
                          <p className="text-sm text-blue-dark">💡 <strong>Tip:</strong> This dialog appears when Office cannot activate online automatically.</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="relative aspect-[4/3] w-full max-w-[400px] mx-auto">
                          <Image
                            src="/images/activationByPhone/Method1Photo1.png"
                            alt="Office activation dialog - Method 1 Step 1"
                            fill
                            className="rounded-lg object-contain border border-gray-200 shadow-md"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                      <h3 className="text-xl font-bold text-dark">Select Your Country</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-6 mb-4">Choose your country from the dropdown menu to get the appropriate phone numbers and Installation ID for your region.</p>
                        <div className="bg-yellow-light-5 p-4 rounded-lg">
                          <p className="text-sm text-yellow-dark">⚠️ <strong>Note:</strong> The Installation ID shown will be different for each installation.</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="relative aspect-[4/3] w-full max-w-[400px] mx-auto">
                          <Image
                            src="/images/activationByPhone/Method1Photo2.webp"
                            alt="Office activation dialog - Country selection"
                            fill
                            className="rounded-lg object-contain border border-gray-200 shadow-md"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Steps 3-7 */}
                  <div className="bg-gray-light-6 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-dark mb-6">Steps 3-7: Online Process (Currently Unavailable)</h3>
                    <div className="space-y-4 text-gray-6">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</span>
                        <p><strong>Step 3:</strong> Copy the Installation ID displayed on step 2 to your clipboard.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">4</span>
                        <p><strong>Step 4:</strong> Go to Microsoft&apos;s Get Confirmation ID Online service (currently unavailable).</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">5</span>
                        <p><strong>Step 5:</strong> Enter the Installation ID in the Installation ID (IDD) box.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">6</span>
                        <p><strong>Step 6:</strong> Click on Get and copy the Confirmation ID (CID).</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">7</span>
                        <p><strong>Step 7:</strong> Enter the Confirmation ID (CID) in the A, B, C... boxes then click Next.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Method 2 */}
              <section id="method-2" className="mb-16">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Method 2: Call Microsoft Center (Recommended)
                </h2>
                
                <div className="bg-green-light-6 border border-green-light-4 rounded-lg p-6 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-green">Recommended Method</h3>
                  </div>
                  <p className="text-green-dark">This is the most reliable method when online activation fails. Follow the phone activation process below.</p>
                </div>

                <div className="space-y-8">
                  {/* Initial Steps */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                      <h3 className="text-xl font-bold text-dark">Start Phone Activation Process</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-6 mb-4">Click NEXT to proceed to the telephone activation section where you&apos;ll see country selection options.</p>
                        <div className="bg-blue-light-5 p-4 rounded-lg">
                          <p className="text-sm text-blue-dark">💡 <strong>Tip:</strong> Make sure you have your product key ready before starting.</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="relative aspect-[4/3] w-full max-w-[400px] mx-auto">
                          <Image
                            src="/images/activationByPhone/Method2Photo1.png"
                            alt="Office activation dialog - Method 2 Step 1"
                            fill
                            className="rounded-lg object-contain border border-gray-200 shadow-md"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Country Selection */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                      <h3 className="text-xl font-bold text-dark">Select Country & Get Phone Number</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="space-y-3 text-gray-6 mb-4">
                          <p><strong>Step 1:</strong> Select your country to get the Microsoft phone number to call.</p>
                          <p><strong>Step 2:</strong> Note down the Installation ID shown on screen.</p>
                        </div>
                        <div className="bg-yellow-light-5 p-4 rounded-lg">
                          <p className="text-sm text-yellow-dark">⚠️ <strong>Important:</strong> If the number doesn&apos;t work, contact our support team for assistance.</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="relative aspect-[4/3] w-full max-w-[400px] mx-auto">
                          <Image
                            src="/images/activationByPhone/Method2Photo2.webp"
                            alt="Office phone activation dialog with phone numbers"
                            fill
                            className="rounded-lg object-contain border border-gray-200 shadow-md"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Steps */}
                  <div className="bg-blue-light-6 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-dark mb-6 text-center">
                      📞 Telephone Activation Steps
                    </h3>
                    <p className="text-center text-gray-6 mb-8">Follow these steps when calling Microsoft&apos;s automated activation system:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                        <p className="text-sm font-medium text-gray-7">Call your chosen number</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                        <p className="text-sm font-medium text-gray-7">Press option 1 for call recording consent</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                        <p className="text-sm font-medium text-gray-7">Enter security number if asked</p>
                      </div>
                      <div className="text-center p-4 bg-yellow-light-4 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
                        <p className="text-sm font-medium text-gray-7"><strong>Press option 3</strong> (NOT 2!)</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">5</div>
                        <p className="text-sm font-medium text-gray-7">Press option 1</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">6</div>
                        <p className="text-sm font-medium text-gray-7">Enter Installation ID carefully</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">7</div>
                        <p className="text-sm font-medium text-gray-7">Press 0 for number of uses</p>
                      </div>
                      <div className="text-center p-4 bg-green-light-5 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">8</div>
                        <p className="text-sm font-medium text-gray-7">Receive Confirmation ID</p>
                      </div>
                      <div className="text-center p-4 bg-green-light-5 rounded-lg shadow-sm">
                        <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">9</div>
                        <p className="text-sm font-medium text-gray-7">Enter Confirmation ID in PC</p>
                      </div>
                    </div>
                  </div>

                  {/* Success Image */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-dark mb-6">Activation Successful!</h3>
                    <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto">
                      <Image
                        src="/images/activationByPhone/Method2Photo3.png"
                        alt="Office activation successful - Method 2"
                        fill
                        className="rounded-lg object-contain border border-gray-200 shadow-md"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-16">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">Why is Method 1 not working?</h3>
                    <p className="text-gray-6">Microsoft has temporarily disabled their online confirmation ID service. We recommend using Method 2 (phone activation) as it&apos;s currently the most reliable option.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">What if the phone number doesn&apos;t work?</h3>
                    <p className="text-gray-6">If the Microsoft phone number doesn&apos;t work in your country, please contact our support team. We can provide alternative numbers or assist you with the activation process.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">How long does phone activation take?</h3>
                    <p className="text-gray-6">Phone activation typically takes 5-10 minutes. The automated system will guide you through each step, and you&apos;ll receive your confirmation ID immediately.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">Is there a cost for calling Microsoft?</h3>
                    <p className="text-gray-6">Standard call charges may apply depending on your phone plan. Microsoft provides toll-free numbers for many countries, but check with your phone provider for specific rates.</p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="mb-16">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                  Professional Support Services
                </h2>
                
                {/* Support Overview */}
                <div className="bg-gradient-to-br from-blue-light-6 to-blue-light-5 rounded-2xl p-8 lg:p-12 mb-8">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.04L6.76 6.76L12 11.48L17.24 6.76L12 2.04zM12 12.52L6.76 17.24L12 21.96L17.24 17.24L12 12.52z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">Expert Technical Assistance</h3>
                    <p className="text-lg text-gray-6 max-w-3xl mx-auto leading-relaxed">
                      Our certified Microsoft specialists are available to provide personalized assistance with your Office activation. 
                      We understand that activation issues can be frustrating, and we&apos;re committed to resolving them efficiently.
                    </p>
                  </div>

                  {/* Support Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-md">
                      <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-dark mb-2">Quick Response</h4>
                      <p className="text-gray-6 text-sm">Average response time under 2 hours during business hours</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 text-center shadow-md">
                      <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-dark mb-2">Guaranteed Resolution</h4>
                      <p className="text-gray-6 text-sm">We ensure your Office is activated or provide alternative solutions</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 text-center shadow-md">
                      <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-dark mb-2">Expert Knowledge</h4>
                      <p className="text-gray-6 text-sm">Microsoft certified specialists with years of experience</p>
                    </div>
                  </div>

                  {/* When to Contact Support */}
                  <div className="bg-white rounded-xl p-8 mb-8">
                    <h4 className="text-xl font-bold text-dark mb-6 text-center">When Should You Contact Our Support Team?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-red-light-4 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p className="text-gray-6">Microsoft phone numbers are not working in your region</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-red-light-4 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p className="text-gray-6">You receive error messages during activation attempts</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-red-light-4 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <p className="text-gray-6">Both Method 1 and Method 2 have failed</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-yellow-light-4 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <p className="text-gray-6">Your Installation ID is not being accepted</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-yellow-light-4 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <p className="text-gray-6">You need assistance with product key validation</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-light-4 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-gray-6">You have questions about licensing or compatibility</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Support Request Information */}
                  <div className="bg-gradient-to-r from-gray-light-6 to-gray-light-5 rounded-xl p-8 mb-8">
                    <h4 className="text-xl font-bold text-dark mb-6 text-center">Information Required for Faster Resolution</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-lg font-semibold text-dark mb-4">Essential Information</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <p className="text-gray-6"><strong>Order Number:</strong> Your purchase confirmation number</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <p className="text-gray-6"><strong>Installation ID:</strong> From the activation dialog (if available)</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <p className="text-gray-6"><strong>Office Version:</strong> Office 2019, 2016, or other version</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <p className="text-gray-6"><strong>Operating System:</strong> Windows 10, 11, or Mac OS version</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-dark mb-4">Additional Details</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue rounded-full"></span>
                            <p className="text-gray-6"><strong>Error Messages:</strong> Exact text of any error messages</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue rounded-full"></span>
                            <p className="text-gray-6"><strong>Methods Tried:</strong> Which activation methods you&apos;ve attempted</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue rounded-full"></span>
                            <p className="text-gray-6"><strong>Phone Numbers Called:</strong> Which Microsoft numbers you tried</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue rounded-full"></span>
                            <p className="text-gray-6"><strong>Country/Region:</strong> Your geographical location</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a 
                      href="/contact" 
                      className="group bg-primary hover:bg-primary-dark text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1">Email Support</h4>
                          <p className="text-sm opacity-90">Submit a detailed support request</p>
                        </div>
                      </div>
                    </a>

                    <a 
                      href="/contact" 
                      className="group bg-green hover:bg-green-dark text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1">Live Chat</h4>
                          <p className="text-sm opacity-90">Get instant help from our team</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Service Guarantee */}
                <div className="bg-gradient-to-r from-green-light-6 to-blue-light-6 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h4 className="text-lg font-bold text-dark">100% Activation Guarantee</h4>
                  </div>
                  <p className="text-gray-6 max-w-2xl mx-auto">
                    We guarantee successful activation of your Office software or provide a full refund. 
                    Your satisfaction and productivity are our top priorities.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivateOfficeByPhone;