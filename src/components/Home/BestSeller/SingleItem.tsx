"use client";
import React, { useState } from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import Image from "next/image";
import Link from "next/link";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { Eye, ShoppingCart, Heart, Star, StarHalf, Zap, Crown, Award } from "lucide-react";
import { updateproductDetails } from "@/redux/features/product-details";

const SingleItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // add to cart with loading state
  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
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
      stars.push(<Star key={i} style={{width: '14px', height: '14px', color: '#fbbf24', fill: '#fbbf24'}} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" style={{width: '14px', height: '14px', color: '#fbbf24', fill: '#fbbf24'}} />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} style={{width: '14px', height: '14px', color: '#d1d5db'}} />);
    }
    
    return stars;
  };

  const discountPercentage = Math.round(((item.price - item.discountedPrice) / item.price) * 100);

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
    // Store in localStorage to persist between pages
    localStorage.setItem("productDetails", JSON.stringify(item));
  };

  const handleImageClick = () => {
    handleProductDetails();
  };

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-transparent hover:ring-2 hover:ring-indigo-200 transform hover:-translate-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eff6ff 100%)' 
          : '#ffffff'
      }}
    >
      {/* Best Seller Badge */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 10,
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
        color: '#ffffff',
        padding: '8px 16px',
        borderRadius: '9999px',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}>
        <span style={{display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff'}}>
          <Crown style={{width: '14px', height: '14px', color: '#ffffff', fill: '#ffffff'}} />
          <span style={{color: '#ffffff'}}>#1 Seller</span>
        </span>
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleItemToWishList}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${
          isWishlisted 
            ? 'bg-red-100 text-red-500 shadow-lg scale-110' 
            : 'bg-white/90 text-gray-400 hover:bg-white hover:text-red-500 shadow-md hover:scale-110'
        }`}
      >
        <Heart style={{width: '18px', height: '18px', color: isWishlisted ? '#ef4444' : undefined, fill: isWishlisted ? '#ef4444' : 'none'}} />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-3xl aspect-square bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8"
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
          <Image 
            src={item.imgs.previews[0]} 
            alt={item.title}
            width={280}
            height={280}
            className={`w-full h-full object-contain transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </Link>
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            {/* View Product */}
            <Link href={`/shop-details?name=${item.name}`}>
              <button
                onClick={handleProductDetails}
                className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 group/btn"
              >
                <Eye style={{width: '18px', height: '18px', color: '#4f46e5'}} />
              </button>
            </Link>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full shadow-xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 disabled:opacity-75 font-semibold"
            >
              {isAddingToCart ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingCart style={{width: '18px', height: '18px', color: '#ffffff'}} />
              )}
              <span>
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-500 font-medium">({item.totalReviews || 0} reviews)</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 hover:text-indigo-600 transition-colors duration-200 mb-4 text-center line-clamp-2">
          <Link href={`/shop-details?name=${item.name}`} onClick={handleProductDetails} className="hover:underline">
            {item.title}
          </Link>
        </h3>

        {/* Price */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            ${item.discountedPrice}
          </span>
          {item.price !== item.discountedPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${item.price}
            </span>
          )}
          {discountPercentage > 0 && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}>
              -{discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Features */}
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
            <Zap style={{width: '14px', height: '14px', color: '#059669', fill: '#059669'}} />
            <span className="text-green-700">Instant Download</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
