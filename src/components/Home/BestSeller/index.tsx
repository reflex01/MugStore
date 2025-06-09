import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import shopData from "@/components/Shop/shopData";
import { ArrowRight, Award, Flame, Star, Target, Zap } from "lucide-react";

const BestSeller = () => {
  return (
    <section className="overflow-hidden py-20 bg-gradient-to-br from-indigo-50/60 via-white to-cyan-50/60 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating colorful icons */}
        <div className="absolute top-16 right-12 animate-bounce" style={{animationDelay: '0s'}}>
          <div style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#fbbf24',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Award style={{width: '16px', height: '16px', color: '#d97706', fill: '#d97706'}} />
          </div>
        </div>
        <div className="absolute top-40 left-16 animate-pulse" style={{animationDelay: '0.7s'}}>
          <div style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#ef4444',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Flame style={{width: '14px', height: '14px', color: '#dc2626', fill: '#dc2626'}} />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 animate-bounce" style={{animationDelay: '1.2s'}}>
          <div style={{
            width: '26px',
            height: '26px',
            backgroundColor: '#8b5cf6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Star style={{width: '15px', height: '15px', color: '#7c3aed', fill: '#7c3aed'}} />
          </div>
        </div>
        <div className="absolute bottom-16 left-8 animate-pulse" style={{animationDelay: '1.8s'}}>
          <div style={{
            width: '22px',
            height: '22px',
            backgroundColor: '#06b6d4',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Target style={{width: '13px', height: '13px', color: '#0891b2', fill: '#0891b2'}} />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Modern Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6 shadow-lg">
            <Flame style={{width: '20px', height: '20px', color: '#1f2937', fill: '#1f2937'}} className="animate-pulse" />
            <span className="font-bold text-gray-800 text-lg">This Month&apos;s Champions</span>
            <Award style={{width: '20px', height: '20px', color: '#1f2937', fill: '#1f2937'}} className="animate-bounce" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Best Sellers
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the most popular Windows software and licenses trusted by thousands of satisfied customers.
          </p>
          
          <Link
            href="/shop-with-sidebar"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform border-2 border-gray-800"
          >
            <span className="text-gray-900 font-bold">Explore Best Sellers</span>
            <ArrowRight style={{width: '20px', height: '20px', color: '#111827'}} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopData.slice(1, 7).map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <SingleItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
