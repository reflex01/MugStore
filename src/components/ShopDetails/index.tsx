"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import RecentlyViewdItems from "./RecentlyViewd";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import products from "@/contents/products.json";
import { 
  Heart,
  Star,
  StarHalf,
  ShoppingCart,
  Share2,
  ZoomIn,
  Shield,
  Clock,
  CheckCircle,
  ThumbsUp,
  MessageCircle,
  Award,
  Download,
  Zap,
  Minus,
  Plus,
  Info,
  FileText,
  MessageSquare
} from "lucide-react";

const ShopDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const searchParams = useSearchParams();
  const productName = searchParams.get("name");

  const dispatch = useDispatch<AppDispatch>();

  // Enhanced tabs with icons
  const tabs = [
    { id: "description", title: "Description", icon: FileText },
    { id: "specifications", title: "Specifications", icon: Info },
    { id: "reviews", title: "Reviews", icon: MessageSquare },
    { id: "faq", title: "FAQ", icon: MessageCircle },
  ];

  // Find the matching product
  const currentProduct = products.data.find((p) => p.name === productName);
  const [productFromStorage, setProductFromStorage] = useState(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("productDetails");
      setProductFromStorage(stored ? JSON.parse(stored) : null);
    }
  }, []);
  
  const productFromRedux = useAppSelector(
    (state) => state.productDetailsReducer.value
  );
  const product =
    currentProduct ||
    productFromStorage ||
    productFromRedux;

  const discountPercentage = product ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) : 0;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id || Date.now(),
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
      quantity: quantity,
      category: product.category,
      imgs: {
        thumbnails: product.imgs?.thumbnails || [],
        previews: product.imgs?.previews || [],
      },
    };
    dispatch(addItemToCart(cartItem));
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    dispatch(addItemToWishlist({
      ...product,
      status: "available",
      quantity: 1,
    }));
  };

  const renderStars = (rating = product?.averageRating || 4.8) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow text-yellow drop-shadow-sm" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow text-yellow drop-shadow-sm" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-5" />);
    }
    
    return stars;
  };

  // Enhanced product description with better formatting
  const getProductDescription = () => {
    // For mugs and other physical products
    return {
      overview: `${product.title} is a high-quality ceramic mug perfect for your daily coffee, tea, or any hot beverage. Crafted with durable materials and designed for both home and office use.`,
      features: [
        "High-quality ceramic construction for durability",
        "Fast shipping - delivered within 3-5 business days",
        "Dishwasher safe for easy cleaning",
        "Perfect size for daily use",
        "Comfortable handle design",
        "Professional printing quality",
        "Safe and secure transaction with money-back guarantee"
      ],
      requirements: {
        capacity: product.description?.match(/Capacity (\d+) ml/)?.[1] + " ml" || "Various sizes available",
        material: "Ceramic",
        care: "Dishwasher safe",
        weight: product.description?.match(/weight (\d+) g/)?.[1] + " g" || "Lightweight design",
        dimensions: "Optimized for comfort and daily use"
      }
    };
  };

  const customerReviews = product?.customerReviews || [];

  const faqData = product?.faq || [];

  if (!product || product.title === "") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600">Please select a product to view details</p>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.imgs?.previews || [],
    "description": getProductDescription()?.overview || product.title,
    "brand": {
      "@type": "Brand",
      "name": "MugsStore"
    },
    "offers": {
      "@type": "Offer",
      "url": typeof window !== 'undefined' ? window.location.href : '',
      "priceCurrency": "USD",
      "price": product.discountedPrice,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "MugsStore"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.averageRating?.toString() || "4.8",
      "reviewCount": product.totalReviews?.toString() || "0"
    }
  };

  return (
    <>
      <Head>
        <title>{product.title} - Premium Quality Mug | Best Price</title>
        <meta name="description" content={`Buy ${product.title} at the best price. High-quality ceramic mug with fast shipping. ${discountPercentage}% off - Save $${(product.price - product.discountedPrice).toFixed(2)} today!`} />
        <meta name="keywords" content={`${product.title}, ceramic mug, coffee mug, tea mug, office mug, dishwasher safe, discount`} />
        <meta property="og:title" content={`${product.title} - Best Price Guaranteed`} />
        <meta property="og:description" content={`Get ${product.title} with ${discountPercentage}% discount. Fast shipping, high-quality ceramic, dishwasher safe.`} />
        <meta property="og:image" content={product.imgs?.previews[0]} />
        <meta property="og:type" content="product" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Breadcrumb title="Product Details" pages={[
        { name: "Shop", href: "/shop-with-sidebar" },
        { name: product.category, href: `/shop-with-sidebar?category=${product.category}` },
        { name: product.title, href: "#" }
      ]} />

      {/* Product Section */}
      <section className="py-6 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            
            {/* Image Gallery - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                  {product.imgs?.previews?.[selectedImage] || product.imgs?.previews?.[0] ? (
                    <Image
                      src={product.imgs.previews[selectedImage] || product.imgs.previews[0]}
                      alt={product.title || 'Product image'}
                      fill
                      className="object-contain p-4 sm:p-8 transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <span>No image available</span>
                    </div>
                  )}
                  
                  {/* Zoom Button - Hidden on mobile */}
                  <button
                    className="hidden sm:block absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
                  >
                    <ZoomIn className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Discount Badge */}
                  {discountPercentage > 0 && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <div className="px-3 py-1 rounded-lg shadow-md font-semibold text-sm animate-pulse" style={{ backgroundColor: '#dc2626', color: '#ffffff', animation: 'pulse 2s infinite' }}>
                        -{discountPercentage}% OFF
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery - Mobile responsive */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {product.imgs?.thumbnails?.filter(image => image && image.trim() !== '').map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title || 'Product'} thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain p-1 sm:p-2"
                    />
                  </button>
                )) || []}
              </div>

            </div>

            {/* Product Information - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 pr-3">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                      {product.title}
                    </h1>
                    
                    {/* Rating - Mobile friendly */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-0.5">
                          {renderStars(4.8)}
                        </div>
                        <span className="text-gray-600 ml-1">4.8 (127)</span>
                      </div>
                      <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                      <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800 text-sm">In Stock</span>
                      </div>
                    </div>
                  </div>

                  {/* Share & Wishlist - Mobile optimized */}
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <button
                      onClick={handleWishlist}
                      className={`p-2 sm:p-3 rounded-full border-2 transition-all duration-200 ${
                        isWishlisted 
                          ? 'bg-red-50 border-red-200 text-red-500' 
                          : 'bg-white border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 sm:p-3 rounded-full border-2 border-gray-200 text-gray-400 hover:border-blue-200 hover:text-blue-500 transition-all duration-200">
                      <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>

                {/* Price - Mobile responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    ${product.discountedPrice}
                  </span>
                  {product.price !== product.discountedPrice && (
                    <>
                      <span className="text-xl sm:text-2xl text-gray-400 line-through">
                        ${product.price}
                      </span>
                      <div className="px-3 py-1 rounded-lg text-sm font-medium shadow-sm w-fit" style={{ backgroundColor: '#16a34a', color: '#ffffff' }}>
                        Save ${(product.price - product.discountedPrice).toFixed(2)}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                <div className="flex flex-wrap justify-center gap-3">
                  {/* Trust Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <Shield className="w-4 h-4" style={{ color: '#2563eb' }} />
                    <span className="font-medium text-sm" style={{ color: '#1f2937' }}>Quality Product</span>
                  </div>
                  
                  {/* Delivery Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <Clock className="w-4 h-4" style={{ color: '#16a34a' }} />
                    <span className="font-medium text-sm" style={{ color: '#1f2937' }}>Fast Shipping</span>
                  </div>
                  
                  {/* Support Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: '#faf5ff', border: '1px solid #d8b4fe' }}>
                    <Award className="w-4 h-4" style={{ color: '#9333ea' }} />
                    <span className="font-medium text-sm" style={{ color: '#1f2937' }}>Customer Support</span>
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart - Mobile optimized */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg sm:rounded-xl w-fit">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="p-2 sm:p-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <span className="px-4 sm:px-6 py-2 sm:py-3 border-x border-gray-200 font-semibold min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 sm:p-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    ${(product.discountedPrice * quantity).toFixed(2)} total
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg"
                  style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                >
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#ffffff' }} />
                  <span style={{ color: '#ffffff' }}>Buy Now - Save ${(product.price - product.discountedPrice).toFixed(2)}</span>
                </button>
                
                {/* Product Info */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>In Stock</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>Ships Within 24h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div style={{ backgroundColor: '#f9fafb' }} className="rounded-lg p-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                  {/* Security */}
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg shadow-sm" style={{ backgroundColor: '#ffffff' }}>
                    <Shield className="w-4 h-4" style={{ color: '#2563eb' }} />
                    <span className="font-medium" style={{ color: '#1f2937' }}>SSL Secured</span>
                  </div>
                  
                  {/* Customer Reviews */}
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg shadow-sm" style={{ backgroundColor: '#ffffff' }}>
                    <Star className="w-4 h-4 fill-current" style={{ color: '#eab308', fill: '#eab308' }} />
                    <span className="font-medium" style={{ color: '#1f2937' }}>{product.averageRating || 4.8}/5 Rating</span>
                  </div>
                  
                  {/* Support */}
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg shadow-sm" style={{ backgroundColor: '#ffffff' }}>
                    <CheckCircle className="w-4 h-4" style={{ color: '#16a34a' }} />
                    <span className="font-medium" style={{ color: '#1f2937' }}>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation - Mobile friendly */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 sm:mb-12 px-2 sm:px-4">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                    activeTab === tab.id
                      ? 'bg-blue text-white shadow-lg shadow-blue-200 scale-105 transform'
                      : 'bg-white text-dark hover:bg-blue-light-5 hover:text-blue border border-gray-3 hover:border-blue hover:shadow-md'
                  }`}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span className="hidden sm:inline">{tab.title}</span>
                  <span className="sm:hidden text-xs">{tab.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {product.description || getProductDescription()?.overview}
                  </p>
                  
                  <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-r from-green to-blue rounded-full">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">🌟 Premium Features</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(product.features || getProductDescription()?.features || []).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-light-6 to-blue-light-5 rounded-xl border border-green-light-3 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                        <div className="p-1 bg-green rounded-full">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-dark font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Value Proposition */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-light-4 to-green-light-6 rounded-xl border-2 border-yellow-dark">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow rounded-full">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-yellow-dark-2">💎 Premium Value</p>
                        <p className="text-sm text-green-dark font-medium">Worth $500+ • You save ${(product.price - product.discountedPrice).toFixed(2)} today!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specifications" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue to-green bg-clip-text text-transparent mb-4">🖥️ Technical Specifications</h2>
                  <p className="text-lg text-gray-600">Everything you need to know about compatibility</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-light-5 to-green-light-6 rounded-2xl p-8 border border-blue-light-3">
                  <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-r from-blue to-green rounded-full">
                      <Info className="w-5 h-5 text-white" />
                    </div>
                    💻 System Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.specifications && Object.keys(product.specifications).length > 0 ? (
                      Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className={`p-4 bg-white rounded-xl border border-blue-light-3 hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 bg-blue rounded-lg`}>
                              <span className="text-white font-bold text-lg">💻</span>
                            </div>
                            <h4 className={`font-bold text-blue-dark capitalize`}>{key}</h4>
                          </div>
                          <p className="text-dark font-medium ml-12">{String(value)}</p>
                        </div>
                      ))
                    ) : (
                      [
                        { key: "Processor", value: "1 GHz or faster processor or SoC", color: "blue", icon: "⚡" },
                        { key: "Memory", value: "2 GB for 64-bit OS", color: "green", icon: "🧠" },
                        { key: "Storage", value: "20 GB for 64-bit OS", color: "orange", icon: "💾" },
                        { key: "Graphics", value: "DirectX 9 or later with WDDM 1.0 driver", color: "teal", icon: "🎮" },
                        { key: "Display", value: "800x600 resolution minimum", color: "blue", icon: "🖥️" },
                        { key: "Internet", value: "Required for activation and updates", color: "green", icon: "🌐" }
                      ].map((spec, index) => (
                        <div key={index} className={`p-4 bg-white rounded-xl border border-${spec.color}-light-3 hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 bg-${spec.color} rounded-lg`}>
                              <span className="text-white font-bold text-lg">{spec.icon}</span>
                            </div>
                            <h4 className={`font-bold text-${spec.color}-dark`}>{spec.key}</h4>
                          </div>
                          <p className="text-dark font-medium ml-12">{spec.value}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-light-5 to-blue-light-4 rounded-xl border border-blue-light-3 hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                    <div className="p-4 bg-blue rounded-full w-fit mx-auto mb-4 shadow-lg">
                      <Download className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="font-bold text-blue-dark mb-2">🚀 Digital Download</h4>
                    <p className="text-blue font-semibold">Instant access after purchase</p>
                    <div className="mt-3 px-3 py-1 bg-blue-light-3 rounded-full">
                      <span className="text-xs font-bold text-blue-dark">✨ NO WAITING</span>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-light-6 to-green-light-5 rounded-xl border border-green-light-3 hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                    <div className="p-4 bg-green rounded-full w-fit mx-auto mb-4 shadow-lg">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="font-bold text-green-dark mb-2">🛡️ 100% Genuine</h4>
                    <p className="text-green font-semibold">Official Microsoft license</p>
                    <div className="mt-3 px-3 py-1 bg-green-light-3 rounded-full">
                      <span className="text-xs font-bold text-green-dark">✅ VERIFIED</span>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-light-4 to-orange-light rounded-xl border border-yellow-dark hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                    <div className="p-4 bg-yellow rounded-full w-fit mx-auto mb-4 shadow-lg">
                      <Clock className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="font-bold text-yellow-dark-2 mb-2">♾️ Lifetime License</h4>
                    <p className="text-orange-dark font-semibold">Never expires</p>
                    <div className="mt-3 px-3 py-1 bg-yellow-light-2 rounded-full">
                      <span className="text-xs font-bold text-yellow-dark-2">🔥 FOREVER</span>
                    </div>
                  </div>
                </div>

                {/* Compatibility Matrix */}
                <div className="bg-white rounded-2xl p-6 border border-gray-3 shadow-lg">
                  <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                    <div className="p-2 bg-gradient-to-r from-teal to-blue rounded-full">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    🖥️ Compatibility Matrix
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { device: "Desktop PC", compatible: true, color: "green" },
                      { device: "Laptop", compatible: true, color: "green" },
                      { device: "Tablet (x86)", compatible: true, color: "green" },
                      { device: "Virtual Machine", compatible: true, color: "blue" },
                      { device: "Gaming PC", compatible: true, color: "green" },
                      { device: "Workstation", compatible: true, color: "blue" },
                      { device: "Server", compatible: false, color: "red" },
                      { device: "Mac (Boot Camp)", compatible: true, color: "orange" }
                    ].map((item, index) => (
                      <div key={index} className={`p-3 rounded-lg border-2 ${item.compatible ? `border-${item.color}-light-3 bg-${item.color}-light-6` : 'border-red-light-3 bg-red-light-6'}`}>
                        <div className="text-center">
                          <div className={`text-2xl mb-2 ${item.compatible ? `text-${item.color}` : 'text-red'}`}>
                            {item.compatible ? '✅' : '❌'}
                          </div>
                          <p className={`font-semibold text-sm ${item.compatible ? `text-${item.color}-dark` : 'text-red-dark'}`}>{item.device}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="space-y-8">
                {/* Reviews Header */}
                <div className="text-center bg-gradient-to-r from-yellow-light-4 to-green-light-6 rounded-2xl p-8 border border-yellow-dark">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green to-blue bg-clip-text text-transparent mb-4">⭐ Customer Reviews</h2>
                  <div className="flex items-center justify-center gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      {renderStars(product.averageRating)}
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-dark">{product.averageRating || 4.9}</p>
                      <p className="text-sm text-green font-medium">out of 5</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-dark">{product.totalReviews || 0}</p>
                      <p className="text-sm text-blue font-medium">reviews</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-green-light-6 rounded-lg p-3 border border-green-light-3">
                      <p className="font-bold text-green-dark">98%</p>
                      <p className="text-xs text-green">5 Stars</p>
                    </div>
                    <div className="bg-blue-light-5 rounded-lg p-3 border border-blue-light-3">
                      <p className="font-bold text-blue-dark">96%</p>
                      <p className="text-xs text-blue">Recommend</p>
                    </div>
                    <div className="bg-yellow-light-4 rounded-lg p-3 border border-yellow-dark">
                      <p className="font-bold text-yellow-dark-2">2 min</p>
                      <p className="text-xs text-orange">Avg Delivery</p>
                    </div>
                    <div className="bg-green-light-6 rounded-lg p-3 border border-green-light-3">
                      <p className="font-bold text-green-dark">100%</p>
                      <p className="text-xs text-green">Genuine</p>
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {customerReviews.map((review, index) => (
                    <div key={review.id} className={`bg-gradient-to-r ${
                      review.rating === 5 
                        ? 'from-green-light-6 to-blue-light-5 border-green-light-3' 
                        : 'from-yellow-light-4 to-orange-light border-yellow-dark'
                    } rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 bg-gradient-to-r ${
                            ['from-blue-500 to-green-500', 'from-green-500 to-yellow-500', 'from-yellow-500 to-red-500', 'from-red-500 to-blue-500', 'from-purple-500 to-pink-500'][index % 5]
                          } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                            {(review.reviewer || review.name || 'A').charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-dark text-lg">{review.reviewer || review.name || 'Anonymous'}</h4>
                              <div className="flex items-center gap-1 bg-green text-white px-3 py-1 rounded-full shadow-md">
                                <CheckCircle className="w-4 h-4" />
                                <span className="text-xs font-bold">✅ VERIFIED</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mb-1">
                              <div className="flex items-center gap-1">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-gray-600 font-medium">{review.date || 'Recent'}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          review.rating === 5 
                            ? 'bg-green text-white' 
                            : 'bg-yellow text-white'
                        }`}>
                          {review.rating === 5 ? '⭐ EXCELLENT' : '👍 GOOD'}
                        </div>
                      </div>
                      
                      <p className="text-dark mb-4 leading-relaxed font-medium text-lg">{review.comment}</p>
                      
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 bg-white hover:bg-green-light-6 text-gray-700 hover:text-green-dark px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-md border border-gray-3 hover:border-green-light-3">
                          <ThumbsUp className="w-5 h-5" />
                          <span className="font-semibold">👍 Helpful</span>
                        </button>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Was this review helpful?</span>
                          <button className="text-green-dark hover:text-green font-semibold">Yes</button>
                          <span>•</span>
                          <button className="text-red-dark hover:text-red font-semibold">No</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Review CTA */}
                <div className="bg-gradient-to-r from-blue-light-5 to-green-light-6 rounded-2xl p-8 border border-blue-light-3 text-center">
                  <h3 className="text-2xl font-bold text-dark mb-4">💬 Share Your Experience</h3>
                  <p className="text-gray-600 mb-6">Help others make the right choice by sharing your review!</p>
                  <button className="bg-gradient-to-r from-green to-green-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                    ✍️ Write a Review
                  </button>
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-200">
                      <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-full">
                          <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        </div>
                        <span className="text-blue-800">{faq.question}</span>
                      </h3>
                      <p className="text-gray-700 ml-12 leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Perfect Mobile CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-2xl">
        <div className="px-4 py-3 safe-area-inset-bottom">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="text-lg font-bold text-gray-900">
                ${product.discountedPrice}
              </div>
              {product.price !== product.discountedPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">
                    ${product.price}
                  </span>
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-semibold">
                    Save ${(product.price - product.discountedPrice).toFixed(2)}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
              style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              <ShoppingCart className="w-5 h-5" style={{ color: '#ffffff' }} />
              <span className="text-sm font-semibold" style={{ color: '#ffffff' }}>Buy Now</span>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:pb-0 pb-24">
        <RecentlyViewdItems />
        <Newsletter />
      </div>
    </>
  );
};

export default ShopDetails;