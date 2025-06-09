import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Add a product to the shopping cart",
      description: "Use the quick browsing function to search for the software you need. Make your selection and add to your cart.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      bgColor: "bg-blue-light-5"
    },
    {
      number: "2", 
      title: "Apply promocode at checkout",
      description: "For extra savings, remember to check the homepage for any discount codes — Often, special promotions are running.",
      icon: (
        <svg className="w-12 h-12 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      bgColor: "bg-green-light-6"
    },
    {
      number: "3",
      title: "Receive activation key & download link in mailbox", 
      description: "No frustrating shipping delays. Instead, get a download link in your mailbox. Install and start using your product right away.",
      icon: (
        <svg className="w-12 h-12 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-yellow-light-4"
    }
  ];

  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-bold text-dark text-2xl lg:text-3xl xl:text-4xl mb-4">
            Download your software in seconds
          </h2>
          <p className="text-dark-3 text-lg max-w-2xl mx-auto">
            All Good Keys has made the process of software download as easy as 1-2-3
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-blue-light-4 to-blue-light-3 transform translate-x-0 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-light-3 rounded-full"></div>
                </div>
              )}

              <div className="group bg-white rounded-2xl p-8 shadow-2 border border-gray-3/30 hover:shadow-3 hover:border-blue/20 transition-all duration-300 relative z-10">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-xl text-dark group-hover:text-blue transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-dark-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-light-5 to-white p-6 rounded-2xl border border-blue/20">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium text-dark">
                Ready to get started?
              </span>
            </div>
            <a
              href="/shop-without-sidebar"
              className="inline-flex items-center px-6 py-3 bg-blue hover:bg-blue-dark text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Browse Software
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;