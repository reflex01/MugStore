import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | MugsStore",
  description: "Find answers to frequently asked questions about our mugs, shipping, returns, and more at MugsStore.",
  keywords: "FAQ, questions, answers, mugs, shipping, returns, customer service",
};

const FAQPage = () => {
  const faqs = [
    {
      id: 1,
      question: "What types of mugs do you offer?",
      answer: "We offer a wide variety of mugs including ceramic mugs, travel mugs, insulated mugs, custom printed mugs, and specialty designs. Our collection features everything from classic coffee mugs to unique artistic designs perfect for any occasion."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the United States. Express shipping (1-2 business days) and overnight shipping options are also available. International shipping times vary by destination, typically 7-14 business days."
    },
    {
      id: 3,
      question: "Can I customize mugs with my own design?",
      answer: "Yes! We offer custom printing services for both personal and business orders. You can upload your own designs, logos, or text. Minimum order quantities may apply for custom orders. Contact our customer service team for more details about customization options."
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in original condition. Custom or personalized mugs cannot be returned unless there's a manufacturing defect. Return shipping costs are the customer's responsibility unless the item was damaged or defective upon arrival."
    },
    {
      id: 5,
      question: "Are your mugs dishwasher and microwave safe?",
      answer: "Most of our ceramic mugs are dishwasher and microwave safe. However, mugs with metallic accents or certain special finishes should be hand-washed only. Product pages include specific care instructions for each item."
    },
    {
      id: 6,
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer volume discounts for orders of 12 or more mugs. Bulk pricing is available for businesses, events, and organizations. Contact our sales team for a custom quote on large orders."
    },
    {
      id: 7,
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also log into your account on our website to view order status and tracking information. If you checked out as a guest, use the order confirmation email to track your package."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are processed securely using industry-standard encryption."
    },
    {
      id: 9,
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 1 hour of placement. After that, orders enter our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes to your order."
    },
    {
      id: 10,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Customers are responsible for any customs duties or import taxes that may apply in their country."
    },
    {
      id: 11,
      question: "What if my mug arrives damaged?",
      answer: "If your mug arrives damaged, please contact us within 48 hours with photos of the damage. We'll provide a full refund or replacement at no additional cost. We package all items carefully, but accidents can happen during shipping."
    },
    {
      id: 12,
      question: "Do you have a physical store?",
      answer: "Currently, we operate exclusively online to offer the best prices and widest selection. This allows us to focus on quality products and excellent customer service while keeping costs low for our customers."
    }
  ];

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
            <span className="text-blue">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-17.5 xl:py-22.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center mb-17.5">
            <h1 className="text-3xl xl:text-custom-1 font-bold text-dark mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-5 max-w-2xl mx-auto">
              Have questions about our mugs? Find answers to the most commonly asked questions below. 
              If you can&apos;t find what you&apos;re looking for, feel free to contact our customer service team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-1 overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-1 transition-colors duration-200">
                      <h3 className="text-lg font-medium text-dark pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-gray-5 group-open:rotate-180 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-5 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-17.5">
            <div className="bg-blue-light rounded-lg p-8 xl:p-12">
              <h2 className="text-2xl font-bold text-dark mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-5 mb-6">
                Our customer service team is here to help. Get in touch and we&apos;ll respond as soon as possible.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue text-white py-3 px-6 rounded-md hover:bg-blue-dark transition-colors duration-200"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <a
                  href="mailto:support@mugsstore.org"
                  className="inline-flex items-center gap-2 bg-white text-blue py-3 px-6 rounded-md border-2 border-blue hover:bg-blue hover:text-white transition-colors duration-200"
                >
                  Email Support
                  <svg
                    className="w-4 h-4"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
