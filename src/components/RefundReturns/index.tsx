import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";

const RefundReturns = () => {
  const lastUpdated = "December 6, 2024";

  return (
    <>
      <Breadcrumb title={"Refund & Returns Policy"} pages={["refund-returns"]} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-green-light-6 via-white to-blue-light-5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-light-5 text-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Customer Satisfaction Guarantee
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-6 leading-tight">
              Refund & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue">Returns Policy</span>
            </h1>
            
            <p className="text-lg text-gray-6 mb-8 leading-relaxed max-w-3xl mx-auto">
              At AllKeysSale, we want to ensure that you are 100% happy with your purchase. 
              Our comprehensive refund policy protects your investment and guarantees your satisfaction.
            </p>

            <div className="inline-flex items-center gap-2 bg-gray-1 px-4 py-2 rounded-lg text-sm text-gray-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last updated: {lastUpdated}
            </div>
          </div>

          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">30-Day Guarantee</h3>
              <p className="text-gray-6 text-sm">Full refund within 30 days of purchase for eligible reasons</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Fair Process</h3>
              <p className="text-gray-6 text-sm">Clear guidelines and transparent refund procedures</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Quick Processing</h3>
              <p className="text-gray-6 text-sm">Refunds processed immediately, up to 20 days for bank reflection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-gray-1 rounded-2xl shadow-2 p-8 lg:p-12">
            
            {/* Table of Contents */}
            <div className="bg-green-light-6 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-dark mb-4">Policy Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <a href="#right-to-cancel" className="text-green hover:text-green-dark transition-colors">1. Right to Cancel</a>
                <a href="#non-delivery" className="text-green hover:text-green-dark transition-colors">2. Non-Delivery Issues</a>
                <a href="#major-defects" className="text-green hover:text-green-dark transition-colors">3. Major Defects</a>
                <a href="#product-description" className="text-green hover:text-green-dark transition-colors">4. Product Not as Described</a>
                <a href="#refund-process" className="text-green hover:text-green-dark transition-colors">5. Refund Process</a>
                <a href="#contact-info" className="text-green hover:text-green-dark transition-colors">6. Contact Information</a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* 1. Right to Cancel */}
              <section id="right-to-cancel" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                  Right to Cancel
                </h2>
                
                <div className="bg-green-light-6 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">14-Day Cancellation Period</h3>
                  <p className="text-gray-6">
                    You have the right to cancel this contract within 14 days. The cancellation period will expire after 14 days from the day of the conclusion of the contract.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-green pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">How to Exercise Your Right to Cancel</h4>
                    <p className="text-gray-6 mb-4">
                      To exercise the right to cancel, you must inform us at AllKeysSale of your decision to cancel this contract by a clear statement. You can contact us via:
                    </p>
                    <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                      <li><strong>Email:</strong> support@allkeyssale.com</li>
                      <li><strong>Phone:</strong> +1 (202) 552-0420</li>
                      <li><strong>Mail:</strong> AllKeysSale Ltd, 71-75 Shelton Street, WC2H 9JQ, London</li>
                      <li><strong>Contact Form:</strong> Available on our website</li>
                    </ul>
                  </div>

                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Cancellation Deadline</h4>
                    <p className="text-gray-6">
                      To meet the cancellation deadline, it is sufficient for you to send your communication concerning your exercise of the right to cancel before the cancellation period has expired.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Effects of Cancellation</h4>
                    <p className="text-gray-6">
                      If you cancel this contract, we will reimburse to you all payments received from you, without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will make the reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Non-Delivery */}
              <section id="non-delivery" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                  Non-Delivery Issues
                </h2>
                
                <div className="bg-yellow-light-4 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">⚠️ Common Delivery Issues</h3>
                  <p className="text-gray-6">
                    In rare cases, mailing issues from your e-mail provider or your mail server might prevent you from receiving delivery emails from us, or the mail may end up in spam or junk folders.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-light-5 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">First Steps to Take</h4>
                      <ul className="list-disc list-inside text-gray-6 space-y-2 text-sm">
                        <li>Check your spam/junk folder thoroughly</li>
                        <li>Search for emails from @allkeyssale.com</li>
                        <li>Add our domain to your safe sender list</li>
                        <li>Contact us for assistance or email resend</li>
                      </ul>
                    </div>

                    <div className="bg-red-light-6 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">Time Limitations</h4>
                      <ul className="list-disc list-inside text-gray-6 space-y-2 text-sm">
                        <li>Claims must be submitted within 7 days</li>
                        <li>Contact customer service in writing</li>
                        <li>Provide alternative email if needed</li>
                        <li>After 7 days, product considered received</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-red pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Important Notice</h4>
                    <p className="text-gray-6">
                      Claims for non-delivery must be submitted to our customer service department in writing within 7 days from the order placing date. Otherwise, the product will be considered received and downloaded. If you do not properly contact us during this period, you agree that we may consider this as a successful download of the product with no further right of return for a &apos;non-receipt&apos; reason.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Major Defects */}
              <section id="major-defects" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                  Major Defects
                </h2>
                
                <div className="bg-red-light-6 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Product Quality Assurance</h3>
                  <p className="text-gray-6">
                    Although all products are thoroughly tested before release, unexpected errors may occur. We stand behind the quality of our products and will address any major defects promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-yellow pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">What Constitutes a Major Defect</h4>
                    <ul className="list-disc list-inside text-gray-6 space-y-2 ml-4">
                      <li>Software license key fails to activate properly</li>
                      <li>Key has been previously used or is invalid</li>
                      <li>Software download links are broken or corrupted</li>
                      <li>Product completely fails to function as intended</li>
                      <li>Critical compatibility issues not disclosed</li>
                    </ul>
                  </div>

                  <div className="bg-green-light-6 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Our Resolution Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">1</div>
                        <div>
                          <h5 className="font-medium text-dark">Report the Issue</h5>
                          <p className="text-gray-6 text-sm">Contact our support team with detailed information about the defect</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">2</div>
                        <div>
                          <h5 className="font-medium text-dark">48-Hour Resolution</h5>
                          <p className="text-gray-6 text-sm">We will work to correct the issue within 48 hours of your initial complaint</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">3</div>
                        <div>
                          <h5 className="font-medium text-dark">Refund or Replacement</h5>
                          <p className="text-gray-6 text-sm">If we cannot resolve the issue, you get a full refund or replacement product of equal value</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-red pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Resolution Guarantee</h4>
                    <p className="text-gray-6">
                      If we fail to correct a major defect within 48 hours from the date of the initial complaint or any other notification provided by the customer, a full refund will be issued to the customer, or at the customer&apos;s choice, a replacement product of the same or similar value can be offered.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Product Not as Described */}
              <section id="product-description" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                  Product Not as Described
                </h2>
                
                <div className="bg-blue-light-5 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Accurate Product Representation</h3>
                  <p className="text-gray-6">
                    We strive to provide accurate and detailed descriptions of all our products. If you receive a product that significantly differs from our description, you may be eligible for a refund.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-light-6 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">Valid Claims Include</h4>
                      <ul className="list-disc list-inside text-gray-6 space-y-2 text-sm">
                        <li>Wrong software version or edition</li>
                        <li>Different licensing terms than described</li>
                        <li>Missing features clearly advertised</li>
                        <li>Incorrect system requirements</li>
                        <li>Language or regional differences not disclosed</li>
                      </ul>
                    </div>

                    <div className="bg-red-light-6 rounded-lg p-6">
                      <h4 className="font-semibold text-dark mb-3">Invalid Claims</h4>
                      <ul className="list-disc list-inside text-gray-6 space-y-2 text-sm">
                        <li>Personal preferences or expectations</li>
                        <li>Buyer&apos;s remorse or change of mind</li>
                        <li>Misunderstanding of product capabilities</li>
                        <li>Compatibility issues clearly disclosed</li>
                        <li>User error or improper installation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Reporting Process</h4>
                    <p className="text-gray-6 mb-3">
                      Such issues should be reported to our technical support team within 30 days from the date of purchase. Clear evidence must be provided in writing that the purchased product is not as it is described on the website.
                    </p>
                    <p className="text-gray-6">
                      <strong>Important:</strong> Complaints which are based merely on the customer&apos;s false expectations are not honored. We require concrete evidence showing discrepancies between the product description and the actual product received.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Refund Process */}
              <section id="refund-process" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
                  Refund Process & Timeline
                </h2>
                
                <div className="bg-green-light-6 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">30-Day Money-Back Guarantee</h3>
                  <p className="text-gray-6">
                    Our policy offers a full refund within 30 days of your date of purchase for eligible reasons. We&apos;d love to know what went wrong and how we can improve, so please include details about the reason for your refund request.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-light-5 rounded-xl">
                      <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-dark mb-2">Step 1: Contact Us</h4>
                      <p className="text-gray-6 text-sm">Submit refund request with order details</p>
                    </div>

                    <div className="text-center p-6 bg-yellow-light-4 rounded-xl">
                      <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-dark mb-2">Step 2: Review</h4>
                      <p className="text-gray-6 text-sm">We review your request and verify eligibility</p>
                    </div>

                    <div className="text-center p-6 bg-green-light-6 rounded-xl">
                      <div className="w-12 h-12 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-dark mb-2">Step 3: Refund</h4>
                      <p className="text-gray-6 text-sm">Refund processed to original payment method</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green pl-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Processing Timeline</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green rounded-full"></div>
                        <p className="text-gray-6"><strong>Immediate:</strong> Our payment processor submits the refund immediately</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue rounded-full"></div>
                        <p className="text-gray-6"><strong>1-3 Business Days:</strong> Refund appears as pending in your account</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow rounded-full"></div>
                        <p className="text-gray-6"><strong>Up to 20 Days:</strong> Your financial institution processes the refund to reflect in your account/card</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-light-5 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-dark mb-3">Important Notes</h4>
                    <ul className="list-disc list-inside text-gray-6 space-y-2">
                      <li>Refunds are processed using the same payment method as the original transaction</li>
                      <li>Processing time depends on your bank or credit card company</li>
                      <li>More details about processing times can be found at Stripe.com Customer refund processing time</li>
                      <li>We make every attempt to process refunds as quickly as possible</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 6. Contact Information */}
              <section id="contact-info" className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-red rounded-full flex items-center justify-center text-white text-sm font-bold">6</span>
                  Contact Information
                </h2>
                
                <div className="bg-red-light-6 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-dark mb-3">Professional Support Team</h3>
                  <p className="text-gray-6">
                    Our Technical Support Team is always eager to assist you and deliver highly professional support in a timely manner. Thank you for your interest in AllKeysSale.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-dark mb-4">Customer Service</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-6">support@allkeyssale.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-gray-6">+1 (202) 552-0420</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div className="text-gray-6">
                            <div>AllKeysSale Ltd</div>
                            <div>71-75 Shelton Street</div>
                            <div>WC2H 9JQ, London</div>
                            <div>United Kingdom</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-dark mb-4">Business Hours</h4>
                      <div className="space-y-2 text-gray-6">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM GMT</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM GMT</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                        <div className="mt-4 p-3 bg-green-light-6 rounded-lg">
                          <p className="text-sm text-gray-6">
                            <strong>Emergency Support:</strong> Available 24/7 for critical issues
                          </p>
                        </div>
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
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green to-blue">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our customer service team is here to help. Contact us anytime for assistance with refunds, returns, or any other questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-green px-8 py-4 rounded-lg font-medium hover:bg-gray-1 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </Link>
              <Link href="/" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundReturns;
