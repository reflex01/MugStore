import React from "react";
import Image from "next/image";

const actionData = [
  {
    title: "Browse All Software",
    description: "200+ products available",
    icon: (
      <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    action: "Browse Now",
    href: "/shop-without-sidebar"
  },
  {
    title: "Compare Products",
    description: "Find the perfect match",
    icon: (
      <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    action: "Compare",
    href: "/shop-with-sidebar"
  },
  {
    title: "Need Help?",
    description: "Get expert assistance",
    icon: (
      <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    action: "Contact Us",
    href: "/contact"
  },
  {
    title: "Track Your Order",
    description: "Real-time updates",
    icon: (
      <svg className="w-8 h-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    action: "Track Order",
    href: "/my-account"
  },
];

const HeroFeature = () => {
  return (
    <div className="relative z-10 mt-16 lg:mt-20">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {actionData.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-3/30 hover:bg-white hover:shadow-2 hover:border-blue/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-dark group-hover:text-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4">
                  <span className="inline-flex items-center px-4 py-2 bg-blue/10 hover:bg-blue text-blue hover:text-white rounded-lg text-sm font-medium transition-all duration-300">
                    {item.action}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-light-5 to-white px-6 py-3 rounded-full border border-blue/20">
            <svg className="w-5 h-5 text-blue animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-dark">
              Get your software keys instantly after purchase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;
