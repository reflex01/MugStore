"use client";
import React, { useState } from "react";
import { Product } from "@/types/product";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";
import { 
  Eye, 
  Heart, 
  Star, 
  StarHalf,
  ShoppingBag
} from "lucide-react";

const SingleGridItem = ({ item }: { item: Product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // add to cart with loading state
  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    const cartItem = {
      id: item.id || Date.now(),
      title: item.title,
      price: item.price,
      discountedPrice: item.discountedPrice,
      quantity: 1,
      category: item.category,
      imgs: {
        thumbnails: item.imgs?.thumbnails || [],
        previews: item.imgs?.previews || []
      }
    };
    
    dispatch(addItemToCart(cartItem));
    
    // Simulate loading for better UX
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 800);
  };

  const handleItemToWishList = () => {
    setIsWishlisted(!isWishlisted);
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
  };

  // Calculate star rating
  const renderStars = () => {
    const rating = item.averageRating || 4.5;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" style={{width: '16px', height: '16px', color: '#fbbf24', fill: '#fbbf24'}} />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} style={{width: '16px', height: '16px', color: '#d1d5db'}} />);
    }
    
    return stars;
  };

  const discountPercentage = Math.round(((item.price - item.discountedPrice) / item.price) * 100);

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
    // Store in localStorage to persist between pages
    if (typeof window !== 'undefined') {
      localStorage.setItem("productDetails", JSON.stringify(item));
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl lg:rounded-3xl shadow-md lg:shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-transparent hover:ring-2 hover:ring-purple-200 transform hover:-translate-y-1 lg:hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)' 
          : '#ffffff'
      }}
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg text-sm font-semibold shadow-md animate-pulse" style={{ backgroundColor: '#dc2626', color: '#ffffff', animation: 'pulse 2s infinite' }}>
          -{discountPercentage}% OFF
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={handleItemToWishList}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${
          isWishlisted 
            ? 'bg-red-100 text-red-500 shadow-lg scale-110' 
            : 'bg-white/80 text-gray-400 hover:bg-white hover:text-red-500 shadow-md hover:scale-110'
        }`}
      >
        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-2xl lg:rounded-t-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 aspect-square"
           style={{
             background: isHovered 
               ? 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 50%, #fdf2f8 100%)' 
               : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
           }}>
        <Link 
          href={`/shop-details?name=${item.name}`}
          onClick={handleProductDetails}
          className="block w-full h-full cursor-pointer"
        >
          {item.imgs?.previews?.[0] ? (
            <Image 
              src={item.imgs.previews[0]} 
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              className={`object-contain p-6 transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <span>No image available</span>
            </div>
          )}
        </Link>
        
        {/* Quick Actions Overlay - Desktop Only */}
        <div className={`hidden lg:block absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            {/* View Product */}
            <Link href={`/shop-details?name=${item.name}`}>
              <button
                onClick={handleProductDetails}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110 group/btn"
              >
                <Eye className="w-5 h-5 text-gray-700 group-hover/btn:text-blue-600" />
              </button>
            </Link>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="flex items-center gap-2 px-6 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-75 font-semibold"
              style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              {isAddingToCart ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingBag className="w-5 h-5" style={{ color: '#ffffff' }} />
              )}
              <span className="font-medium" style={{ color: '#ffffff' }}>
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 lg:p-6">
        {/* Rating */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-500">({item.totalReviews || 0} reviews)</span>
        </div>

        {/* Title */}
        <h3 
          className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-3 line-clamp-2 cursor-pointer"
          onClick={() => handleProductDetails()}
        >
          <Link href={`/shop-details?name=${item.name}`} className="hover:underline">
            {item.title}
          </Link>
        </h3>

        {/* Price and Mobile Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            <span className="text-xl lg:text-2xl font-bold text-gray-900">
              ${item.discountedPrice}
            </span>
            {item.price !== item.discountedPrice && (
              <span className="text-base lg:text-lg text-gray-400 line-through">
                ${item.price}
              </span>
            )}
          </div>
          
          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href={`/shop-details?name=${item.name}`}>
              <button
                onClick={handleProductDetails}
                className="p-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-sm"
                aria-label="View details"
              >
                <Eye className="w-4 h-4" />
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all duration-300 shadow-lg font-medium text-sm"
              style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              {isAddingToCart ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingBag className="w-4 h-4" style={{ color: '#ffffff' }} />
              )}
              <span className="hidden sm:inline" style={{ color: '#ffffff' }}>
                {isAddingToCart ? 'Adding...' : 'Add'}
              </span>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-3 lg:mt-4 flex items-center gap-2 text-xs lg:text-sm font-medium">
          <div className="flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-3 py-1 rounded-lg" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <span style={{ color: '#1d4ed8' }}>Digital License</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGridItem;
