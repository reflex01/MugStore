"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { 
  Eye, 
  ShoppingCart, 
  Heart, 
  Star, 
  StarHalf,
  Zap,
  ShoppingBag,
  Plus
} from "lucide-react";

const ProductItem = ({ item }: { item: Product }) => {
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
    const rating = 4.5; // You can make this dynamic based on item.rating
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

  const handleImageClick = () => {
    handleProductDetails();
  };

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-transparent hover:ring-2 hover:ring-purple-200 transform hover:-translate-y-2"
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
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 10,
          background: 'linear-gradient(135deg, #fb923c 0%, #ef4444 50%, #ec4899 100%)',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}>
          <span style={{display: 'flex', alignItems: 'center', gap: '4px', color: '#ffffff'}}>
            <Zap style={{width: '14px', height: '14px', color: '#ffffff', fill: '#ffffff'}} />
            <span style={{color: '#ffffff'}}>-{discountPercentage}%</span>
          </span>
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
      <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 aspect-square"
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
              className={`object-contain p-6 transition-transform duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <span>No image available</span>
            </div>
          )}
        </Link>
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent backdrop-blur-sm transition-all duration-300 ${
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-full shadow-xl hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-110 disabled:opacity-75 font-semibold"
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
          <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
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
            className="md:hidden p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:scale-110 transform"
          >
            <Plus style={{width: '20px', height: '20px', color: '#ffffff'}} />
          </button>
        </div>

        {/* Features */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
          <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
            <Zap style={{width: '16px', height: '16px', color: '#059669', fill: '#059669'}} />
            <span className="text-green-700">Instant Download</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
