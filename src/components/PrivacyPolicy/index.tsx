import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const PrivacyPolicy = () => {
  const lastUpdated = "December 6, 2024";

  return (
    <>
      <Breadcrumb title={"Privacy Policy"} pages={["privacy-policy"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-light-5 via-white to-green-light-6">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-light-5 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Your Privacy Matters
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-green">Policy</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              At AllKeysSale, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
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
              Privacy at a Glance
            </h2>
            <p className="text-lg text-gray-6 max-w-2xl mx-auto">
              Here's what you need to know about how we handle your information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-xl">
              <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Data Security</h3>
              <p className="text-gray-6 text-sm">SSL encryption protects all your personal information</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-light-6 to-green-light-5 rounded-xl">
              <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Your Control</h3>
              <p className="text-gray-6 text-sm">Manage, update, or delete your data anytime</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-light-4 to-yellow-light-2 rounded-xl">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">Transparency</h3>
              <p className="text-gray-6 text-sm">Clear explanation of data collection and usage</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-light-6 to-red-light-5 rounded-xl">
              <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark mb-2">No Spam</h3>
              <p className="text-gray-6 text-sm">We never sell your data or send unwanted emails</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Privacy Policy Content */}
      <section className="py-16 lg:py-20 bg-gray-1">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-2xl shadow-2 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Table of Contents */}
              <div className="bg-blue-light-5 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-dark mb-4">Table of Contents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <a href="#information-we-collect" className="text-blue hover:text-blue-dark transition-colors">1. Information We Collect</a>
                  <a href="#how-we-use" className="text-blue hover:text-blue-dark transition-colors">2. How We Use Your Information</a>
                  <a href="#information-sharing" className="text-blue hover:text-blue-dark transition-colors">3. Information Sharing</a>
                  <a href="#data-security" className="text-blue hover:text-blue-dark transition-colors">4. Data Security</a>
                  <a href="#your-rights" className="text-blue hover:text-blue-dark transition-colors">5. Your Rights</a>
                  <a href="#cookies" className="text-blue hover:text-blue-dark transition-colors">6. Cookies and Tracking</a>
                  <a href="#children" className="text-blue hover:text-blue-dark transition-colors">7. Children's Privacy</a>
                  <a href="#international" className="text-blue hover:text-blue-dark transition-colors">8. International Transfers</a>
                  <a href="#changes" className="text-blue hover:text-blue-dark transition-colors">9. Policy Changes</a>
                  <a href="#contact" className="text-blue hover:text-blue-dark transition-colors">10. Contact Information</a>
                </div>
              </div>

              {/* 1. Information We Collect */}
              <section id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-1 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Personal Information</h3>
                    <p className="text-gray-6 mb-4">When you create an account or make a purchase, we collect:</p>
                    <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Billing address and payment information</li>
                      <li>Account credentials (username, password)</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div className="bg-gray-1 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Transaction Information</h3>
                    <p className="text-gray-6 mb-4">For each purchase, we collect:</p>
                    <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                      <li>Product details and license keys issued</li>
                      <li>Payment method and transaction history</li>
                      <li>Download and activation records</li>
                      <li>Support tickets and communications</li>
                    </ul>
                  </div>

                  <div className="bg-gray-1 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-6 mb-4">When you use our website, we automatically collect:</p>
                    <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                      <li>IP address and location information</li>
                      <li>Browser type, device information, and operating system</li>
                      <li>Pages visited, time spent, and referral sources</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section id="how-we-use" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  How We Use Your Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-light-6 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Service Delivery</h3>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>Process orders and deliver software licenses</li>
                      <li>Provide customer support and technical assistance</li>
                      <li>Send transaction confirmations and receipts</li>
                      <li>Manage your account and preferences</li>
                    </ul>
                  </div>

                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Business Operations</h3>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>Improve our website and services</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-light-4 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Marketing (With Consent)</h3>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>Send promotional emails about new products</li>
                      <li>Provide special offers and discounts</li>
                      <li>Share product updates and news</li>
                      <li>Conduct surveys and gather feedback</li>
                    </ul>
                  </div>

                  <div className="bg-red-light-6 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Legal Compliance</h3>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>Respond to legal requests and court orders</li>
                      <li>Investigate and prevent illegal activities</li>
                      <li>Protect our rights and property</li>
                      <li>Enforce our terms of service</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. Information Sharing */}
              <section id="information-sharing" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Information Sharing and Disclosure
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">💡 Our Commitment</h3>
                  <p className="text-gray-6">
                    <strong>We do not sell, rent, or lease your personal information to third parties.</strong> 
                    We only share your information in the limited circumstances described below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue pl-6">
                    <h3 className="text-lg font-semibold text-dark mb-2">Service Providers</h3>
                    <p className="text-gray-6">We share information with trusted partners who help us operate our business, such as payment processors, email services, and hosting providers. These partners are bound by strict confidentiality agreements.</p>
                  </div>

                  <div className="border-l-4 border-green pl-6">
                    <h3 className="text-lg font-semibold text-dark mb-2">Legal Requirements</h3>
                    <p className="text-gray-6">We may disclose information when required by law, such as in response to a court order, subpoena, or other legal process, or to protect our rights and safety.</p>
                  </div>

                  <div className="border-l-4 border-red pl-6">
                    <h3 className="text-lg font-semibold text-dark mb-2">Business Transfers</h3>
                    <p className="text-gray-6">In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the transaction, subject to the same privacy protections.</p>
                  </div>
                </div>
              </section>

              {/* 4. Data Security */}
              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                  Data Security
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-light-5 rounded-xl">
                    <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-dark mb-2">Encryption</h3>
                    <p className="text-gray-6 text-sm">All data transmitted to and from our servers is protected using SSL/TLS encryption</p>
                  </div>

                  <div className="text-center p-6 bg-green-light-6 rounded-xl">
                    <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.586-4.586a2 2 0 112.828 2.828L9 20.414l-6-6L7.586 9l1.414 1.414z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-dark mb-2">Access Control</h3>
                    <p className="text-gray-6 text-sm">Strict access controls ensure only authorized personnel can access your information</p>
                  </div>

                  <div className="text-center p-6 bg-red-light-6 rounded-xl">
                    <div className="w-12 h-12 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-dark mb-2">Regular Audits</h3>
                    <p className="text-gray-6 text-sm">We conduct regular security audits and updates to maintain the highest protection standards</p>
                  </div>
                </div>

                <div className="mt-8 bg-gray-1 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Security Measures We Implement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>256-bit SSL encryption for all transactions</li>
                      <li>Secure data centers with 24/7 monitoring</li>
                      <li>Regular security vulnerability assessments</li>
                      <li>Employee training on data protection</li>
                    </ul>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>Multi-factor authentication for staff access</li>
                      <li>Automated backup and disaster recovery</li>
                      <li>Compliance with industry security standards</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. Your Rights */}
              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
                  Your Privacy Rights
                </h2>
                
                <div className="bg-green-light-6 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">You Have Control</h3>
                  <p className="text-gray-6">
                    We believe you should have control over your personal information. Here are the rights you have regarding your data:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">Access Your Data</h4>
                        <p className="text-gray-6 text-sm">Request a copy of all personal information we have about you</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-light-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">Update Information</h4>
                        <p className="text-gray-6 text-sm">Correct or update any inaccurate personal information</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">Delete Your Data</h4>
                        <p className="text-gray-6 text-sm">Request deletion of your personal information (subject to legal requirements)</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-light-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">Data Portability</h4>
                        <p className="text-gray-6 text-sm">Export your data in a machine-readable format</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-light-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364L18.364 5.636" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">Opt-Out</h4>
                        <p className="text-gray-6 text-sm">Unsubscribe from marketing communications at any time</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-light-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-1">Object to Processing</h4>
                        <p className="text-gray-6 text-sm">Object to certain types of data processing for legitimate reasons</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-light-5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">How to Exercise Your Rights</h3>
                  <p className="text-gray-6 mb-4">To exercise any of these rights, please contact us at:</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:privacy@allkeyssale.com" className="inline-flex items-center gap-2 text-blue hover:text-blue-dark">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      privacy@allkeyssale.com
                    </a>
                    <span className="text-gray-6">or</span>
                    <a href="/contact" className="inline-flex items-center gap-2 text-blue hover:text-blue-dark">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contact Support
                    </a>
                  </div>
                </div>
              </section>

              {/* 6. Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">6</span>
                  Cookies and Tracking Technologies
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">What Are Cookies?</h3>
                  <p className="text-gray-6">
                    Cookies are small text files stored on your device that help us improve your browsing experience and understand how you use our website.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-light-6 rounded-lg p-6">
                    <h3 className="font-bold text-dark mb-3">Essential Cookies</h3>
                    <p className="text-gray-6 text-sm mb-3">Required for the website to function properly</p>
                    <ul className="list-disc list-inside text-gray-6 text-sm space-y-1">
                      <li>Shopping cart functionality</li>
                      <li>User authentication</li>
                      <li>Security features</li>
                      <li>Form submissions</li>
                    </ul>
                  </div>

                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h3 className="font-bold text-dark mb-3">Analytics Cookies</h3>
                    <p className="text-gray-6 text-sm mb-3">Help us understand website usage (with your consent)</p>
                    <ul className="list-disc list-inside text-gray-6 text-sm space-y-1">
                      <li>Page views and traffic</li>
                      <li>User behavior patterns</li>
                      <li>Performance monitoring</li>
                      <li>Error tracking</li>
                    </ul>
                  </div>

                  <div className="bg-red-light-6 rounded-lg p-6">
                    <h3 className="font-bold text-dark mb-3">Marketing Cookies</h3>
                    <p className="text-gray-6 text-sm mb-3">Used for personalized advertising (optional)</p>
                    <ul className="list-disc list-inside text-gray-6 text-sm space-y-1">
                      <li>Targeted advertisements</li>
                      <li>Social media integration</li>
                      <li>Remarketing campaigns</li>
                      <li>Third-party tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gray-1 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Managing Cookies</h3>
                  <p className="text-gray-6 mb-4">You can control cookies through:</p>
                  <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                    <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                    <li><strong>Cookie Preferences:</strong> Use our cookie consent banner to choose your preferences</li>
                    <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                    <li><strong>Do Not Track:</strong> We respect browser "Do Not Track" signals</li>
                  </ul>
                </div>
              </section>

              {/* Continue with remaining sections... */}
              {/* 7. Children's Privacy */}
              <section id="children" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">7</span>
                  Children's Privacy
                </h2>
                
                <div className="bg-red-light-6 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Age Restrictions</h3>
                  <p className="text-gray-6 mb-4">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                    If we discover that we have collected information from a child under 13, we will delete it immediately.
                  </p>
                  <p className="text-gray-6">
                    If you are a parent or guardian and believe your child has provided us with personal information, 
                    please contact us at <a href="mailto:privacy@allkeyssale.com" className="text-red hover:text-red-dark">privacy@allkeyssale.com</a>.
                  </p>
                </div>
              </section>

              {/* 8. International Transfers */}
              <section id="international" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">8</span>
                  International Data Transfers
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-dark mb-3">Global Operations</h3>
                    <p className="text-gray-6">
                      AllKeysSale operates globally and may transfer your personal information to countries other than your own. 
                      We ensure that such transfers comply with applicable data protection laws and provide adequate protection for your information.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-green pl-6">
                      <h4 className="font-semibold text-dark mb-2">Adequacy Decisions</h4>
                      <p className="text-gray-6 text-sm">We transfer data to countries with adequate protection as recognized by applicable authorities.</p>
                    </div>
                    <div className="border-l-4 border-yellow pl-6">
                      <h4 className="font-semibold text-dark mb-2">Standard Contractual Clauses</h4>
                      <p className="text-gray-6 text-sm">We use approved contractual terms to ensure protection when transferring data internationally.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 9. Policy Changes */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">9</span>
                  Changes to This Privacy Policy
                </h2>
                
                <div className="bg-green-light-6 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Policy Updates</h3>
                  <p className="text-gray-6 mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                    When we make significant changes, we will:
                  </p>
                  <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                    <li>Update the "Last Updated" date at the top of this policy</li>
                    <li>Send you an email notification (if you have an account with us)</li>
                    <li>Display a prominent notice on our website</li>
                    <li>Provide you with 30 days' notice before significant changes take effect</li>
                  </ul>
                  <p className="text-gray-6 mt-4">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </section>

              {/* 10. Contact Information */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">10</span>
                  Contact Information
                </h2>
                
                <div className="bg-blue-light-5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-dark mb-4">Questions About This Policy?</h3>
                  <p className="text-gray-6 mb-6">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Privacy Officer</h4>
                      <div className="space-y-2 text-gray-6">
                        <p className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          privacy@allkeyssale.com
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
                        <p>AllKeysSale Privacy Department</p>
                        <p>123 Software Lane</p>
                        <p>Las Vegas, NV 89128</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-3">
                    <p className="text-gray-6 text-sm">
                      <strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 days of receipt. 
                      For urgent matters, please call our support line.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue to-green">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Privacy is Our Priority
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're committed to protecting your personal information and being transparent about our data practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue px-8 py-4 rounded-lg font-medium hover:bg-gray-1 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Privacy Team
              </a>
              <a href="mailto:privacy@allkeyssale.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;