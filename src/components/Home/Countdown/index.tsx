import React from "react";

const TrustBadges = () => {
  const trustFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "100% Authentic",
      description: "Premium quality mugs from trusted manufacturers",
      bgColor: "bg-green-light-6"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Payments",
      description: "SSL encrypted checkout with multiple payment options",
      bgColor: "bg-blue-light-5"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Delivery",
      description: "Get your activation keys immediately after purchase",
      bgColor: "bg-yellow-light-4"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z" />
        </svg>
      ),
      title: "Expert Support",
      description: "Professional technical assistance available 24/7",
      bgColor: "bg-red-light-6"
    }
  ];

  const stats = [
    { number: "100K+", label: "Happy Customers", icon: "👥" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "5★", label: "Average Rating", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🛟" }
  ];

  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Why Choose Us Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-light-5 to-white border border-blue/10 p-8 lg:p-12 mb-12">
          <div className="text-center mb-10">
            <h2 className="font-bold text-dark text-2xl lg:text-3xl xl:text-4xl mb-4">
              Why Choose Us?
            </h2>
            <p className="text-dark-3 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their drinkware needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-3/30"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-3 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-2 border border-gray-3/30 hover:shadow-3 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-bold text-2xl lg:text-3xl text-blue mb-1">
                {stat.number}
              </div>
              <div className="text-dark-3 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white rounded-xl px-8 py-4 shadow-2 border border-gray-3/30">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-dark">SSL Secured</span>
            </div>
            <div className="w-px h-4 bg-gray-3"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-dark">Money Back Guarantee</span>
            </div>
            <div className="w-px h-4 bg-gray-3"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-dark">Trusted by 100K+ customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;