"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { 
  Eye, 
  Heart, 
  Star, 
  StarHalf,
  ShoppingBag,
  Plus
} from "lucide-react";

const ProductItem = ({ item }: { item: Product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // add to cart with loading state
  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    const cartItem = {
      id: item.id || Math.floor(Math.random() * 1000000),
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
    localStorage.setItem("productDetails", JSON.stringify(item));
  };

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-150 ease-out overflow-hidden border border-gray-200 hover:border-transparent hover:ring-2 hover:ring-purple-200 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-150 ease-out ${
          isWishlisted 
            ? 'bg-red-100 text-red-500 shadow-lg scale-105' 
            : 'bg-white/80 text-gray-400 hover:bg-white hover:text-red-500 shadow-md hover:scale-105'
        }`}
      >
        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-3xl bg-gray-50 aspect-square">
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
              className={`object-contain p-6 transition-transform duration-150 ease-out ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <span>No image available</span>
            </div>
          )}
        </Link>
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-150 ease-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            {/* View Product */}
            <Link href={`/shop-details?name=${item.name}`} onClick={handleProductDetails}>
              <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-150 ease-out hover:scale-105 group/btn">
                <Eye className="w-5 h-5 text-gray-700 group-hover/btn:text-blue-600" />
              </button>
            </Link>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all duration-150 ease-out hover:scale-105 disabled:opacity-75 font-semibold"
            >
              {isAddingToCart ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingBag className="w-5 h-5" />
              )}
              <span className="font-medium">
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-500">({item.totalReviews || 0} reviews)</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200 mb-3 line-clamp-2">
          <Link href={`/shop-details?name=${item.name}`} onClick={handleProductDetails} className="hover:underline cursor-pointer">
            {item.title}
          </Link>
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              ${item.discountedPrice}
            </span>
            {item.price !== item.discountedPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${item.price}
              </span>
            )}
          </div>
          
          {/* Quick Add Button (Mobile) */}
          <button
            onClick={handleAddToCart}
            className="md:hidden p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-sm"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Features */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <span style={{ color: '#1d4ed8' }}>Digital License</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
