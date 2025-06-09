import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";
import { ArrowRight, Sparkles, TrendingUp, Star, Heart, Zap, Gift, Crown } from "lucide-react";

const NewArrival = () => {
  return (
    <section className="overflow-hidden py-20 bg-gradient-to-br from-emerald-50/60 via-blue-50/50 via-white to-purple-50/60 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating colorful icons */}
        <div className="absolute top-20 left-10 animate-bounce" style={{animationDelay: '0s'}}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#facc15',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Star style={{width: '20px', height: '20px', color: '#ca8a04', fill: '#ca8a04'}} />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-pulse" style={{animationDelay: '0.5s'}}>
          <div style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#ec4899',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Heart style={{width: '16px', height: '16px', color: '#be185d', fill: '#be185d'}} />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
          <div style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#f97316',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Zap style={{width: '16px', height: '16px', color: '#c2410c', fill: '#c2410c'}} />
          </div>
        </div>
        <div className="absolute bottom-20 right-32 animate-pulse" style={{animationDelay: '1.5s'}}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#a855f7',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Gift style={{width: '20px', height: '20px', color: '#7c3aed', fill: '#7c3aed'}} />
          </div>
        </div>
        <div className="absolute top-1/2 right-8 animate-bounce" style={{animationDelay: '2s'}}>
          <div style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#ca8a04',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <Crown style={{width: '16px', height: '16px', color: '#92400e', fill: '#92400e'}} />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Modern Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 rounded-full px-6 py-2 mb-6 shadow-lg">
            <Sparkles style={{width: '20px', height: '20px', color: '#1f2937', fill: '#1f2937'}} className="animate-pulse" />
            <span className="font-bold text-gray-800 text-lg">This Week&apos;s Hot Picks</span>
            <TrendingUp style={{width: '20px', height: '20px', color: '#1f2937', fill: '#1f2937'}} className="animate-bounce" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            New Arrivals
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our latest collection of premium Windows software and licenses, carefully curated for modern users.
          </p>
          
          <Link
            href="/shop-with-sidebar"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 transform border-2 border-gray-800"
          >
            <span className="text-gray-900 font-bold">Explore All Products</span>
            <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {shopData.slice(0, 8).map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProductItem item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewArrival;