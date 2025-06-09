"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumb from "../Common/Breadcrumb";
import CustomSelect from "./CustomSelect";
import CategoryDropdown from "./CategoryDropdown";
import GenderDropdown from "./GenderDropdown";
import SizeDropdown from "./SizeDropdown";
import ColorsDropdwon from "./ColorsDropdwon";
import PriceDropdown from "./PriceDropdown";
import shopData from "../Shop/shopData";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";

const ITEMS_PER_PAGE = 9;

const ShopWithSidebar = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const pageParam = searchParams.get('page');
  
  const [productStyle, setProductStyle] = useState("grid");
  const [productSidebar, setProductSidebar] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryParam ? [categoryParam] : ["Windows"]);
  const [currentPage, setCurrentPage] = useState(parseInt(pageParam || '1'));
  const [filteredProducts, setFilteredProducts] = useState(shopData);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
      setFilteredProducts(shopData.filter(product => product.category.toLowerCase() === categoryParam.toLowerCase()));
    } else {
      setFilteredProducts(shopData.filter(product => product.category === "Windows"));
    }
  }, [categoryParam]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setPaginatedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const categoryQuery = selectedCategories.length > 0 ? selectedCategories[0].toLowerCase() : 'windows';
    window.history.pushState({}, '', `?category=${categoryQuery}&page=${page}`);
  };

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);


  const handleCategorySelect = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category];
      
      // Filter products based on selected categories
      if (newCategories.length === 0) {
        setFilteredProducts(shopData);
      } else {
        setFilteredProducts(
          shopData.filter(product => 
            newCategories.includes(product.category)
          )
        );
      }
      
      setCurrentPage(1); // Reset to first page when filters change
      return newCategories;
    });
  };

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Best Selling", value: "1" },
    { label: "Old Products", value: "2" },
  ];

  const categories = [
    {
      name: "Windows",
      products: 14,
      isRefined: true,
    },
    {
      name: "Desktop",
      products: 10,
      isRefined: false,
    },
    {
      name: "Laptop",
      products: 12,
      isRefined: false,
    },
    {
      name: "Monitor",
      products: 30,
      isRefined: false,
    },
    {
      name: "UPS",
      products: 23,
      isRefined: false,
    },
    {
      name: "Phone",
      products: 10,
      isRefined: false,
    },
    {
      name: "Watch",
      products: 13,
      isRefined: false,
    },
  ];

  const genders = [
    {
      name: "Men",
      products: 10,
    },
    {
      name: "Women",
      products: 23,
    },
    {
      name: "Unisex",
      products: 8,
    },
  ];

  useEffect(() => {
    // closing sidebar while clicking outside (desktop only)
    function handleClickOutside(event: MouseEvent) {
      if (window.innerWidth >= 1280 && !(event.target as Element).closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <Breadcrumb
        title={"Explore All Products"}
        pages={["shop", "/", "shop with sidebar"]}
      />
      
      {/* Modern Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Premium Software Collection
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover genuine Microsoft products with instant delivery and lifetime support
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">✅ 100% Genuine</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">⚡ Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">🛡️ Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
            {/* Mobile Backdrop */}
            {productSidebar && (
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300"
                onClick={() => setProductSidebar(false)}
              />
            )}

            {/* Modern Sidebar */}
            <div
              className={`sidebar-content fixed xl:static xl:z-auto z-50 left-0 top-0 xl:translate-x-0 xl:max-w-[320px] w-full max-w-[320px] xl:w-auto transition-transform duration-300 ease-out ${
                productSidebar
                  ? "translate-x-0 bg-white xl:bg-transparent p-6 h-screen xl:h-auto overflow-y-auto shadow-2xl xl:shadow-none"
                  : "-translate-x-full xl:translate-x-0 xl:bg-transparent"
              }`}
            >
              {/* Mobile Close Button - Internal */}
              <div className="xl:hidden flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setProductSidebar(false)}
                  aria-label="Close filters"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Header - Desktop Only */}
              <div className="mb-8 hidden xl:block">
                <h2 className="text-xl font-bold text-gray-900 mb-2">🔍 Find Your Perfect Software</h2>
                <p className="text-sm text-gray-600">Filter by category and price to discover the ideal solution</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  {/* Active Filters Display */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Active Filters ({selectedCategories.length})
                      </h3>
                      <button 
                        onClick={() => {
                          setSelectedCategories([]);
                          setFilteredProducts(shopData);
                          setCurrentPage(1);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Clear All
                      </button>
                    </div>
                    
                    {/* Current Category Badges */}
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map((category) => (
                        <div key={category} className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                          <span className="text-sm font-medium text-gray-700">{category}</span>
                          <button 
                            onClick={() => handleCategorySelect(category)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M18 6L6 18M6 6L18 18"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                      {selectedCategories.length === 0 && (
                        <div className="text-sm text-gray-500 italic">No filters selected</div>
                      )}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <CategoryDropdown 
                      categories={categories} 
                      selectedCategories={selectedCategories}
                      onCategorySelect={handleCategorySelect}
                    />
                  </div>

                  {/* Price Filter */}
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <PriceDropdown />
                  </div>

                  {/* Popular Categories Quick Access */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      🔥 Popular Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.slice(0, 4).map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => handleCategorySelect(cat.name)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                            selectedCategories.includes(cat.name) 
                              ? 'bg-green-100 text-green-700 font-medium' 
                              : 'hover:bg-white hover:shadow-sm text-gray-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 border-2 rounded transition-colors ${
                                selectedCategories.includes(cat.name) 
                                  ? 'bg-green-500 border-green-500' 
                                  : 'border-gray-300'
                              }`}>
                                {selectedCategories.includes(cat.name) && (
                                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                              <span className="text-sm">{cat.name}</span>
                            </div>
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{cat.products}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* // <!-- Sidebar End --> */}

            {/* Modern Content Area */}
            <div className="flex-1 xl:flex-1">
              {/* Mobile Filter Toggle */}
              <div className="xl:hidden mb-6">
                <button
                  onClick={() => setProductSidebar(!productSidebar)}
                  className="w-full bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-lg flex items-center justify-center gap-3 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path stroke="#374151" strokeWidth="2" strokeLinecap="round" d="M3 6h18M7 12h10m-7 6h4"/>
                  </svg>
                  <span className="font-semibold text-gray-700">Show Filters & Categories</span>
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    {selectedCategories.length}
                  </div>
                </button>
              </div>

              {/* Enhanced Top Bar */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Left Section */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <CustomSelect options={options} />
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600">Showing</span>
                      <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {filteredProducts.length} of {shopData.length}
                      </span>
                      <span className="text-gray-600">products</span>
                    </div>
                  </div>

                  {/* Right Section - View Toggle */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-600 hidden sm:block">View:</span>
                    <div className="flex items-center bg-gray-100 rounded-xl p-1">
                      <button
                        onClick={() => setProductStyle("grid")}
                        aria-label="Grid view"
                        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                          productStyle === "grid"
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
                        </svg>
                      </button>

                      <button
                        onClick={() => setProductStyle("list")}
                        aria-label="List view"
                        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                          productStyle === "list"
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Products Grid Tab Content Start --> */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    : "flex flex-col gap-6 lg:gap-8"
                }`}
              >
                {paginatedProducts.map((item, key) =>
                  productStyle === "grid" ? (
                    <SingleGridItem item={item} key={key} />
                  ) : (
                    <SingleListItem item={item} key={key} />
                  )
                )}
              </div>
              {/* <!-- Products Grid Tab Content End --> */}

              {/* <!-- Products Pagination Start --> */}
              <div className="flex justify-center mt-12 lg:mt-15">
                <div className="bg-white shadow-lg rounded-2xl p-3 border border-gray-100">
                  <ul className="flex items-center gap-1">
                    <li>
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center w-10 h-10 lg:w-8 lg:h-9 ease-out duration-200 rounded-xl hover:text-white hover:bg-blue disabled:text-gray-4 disabled:cursor-not-allowed touch-manipulation"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <li key={page}>
                        <button
                          onClick={() => handlePageChange(page)}
                          className={`flex items-center justify-center min-w-10 h-10 lg:min-w-auto lg:py-1.5 lg:px-3.5 px-3 duration-200 rounded-xl font-medium touch-manipulation ${
                            currentPage === page
                              ? "bg-blue text-white shadow-md"
                              : "hover:text-white hover:bg-blue text-gray-700"
                          }`}
                        >
                          {page}
                        </button>
                      </li>
                    ))}

                    <li>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center w-10 h-10 lg:w-8 lg:h-9 ease-out duration-200 rounded-xl hover:text-white hover:bg-blue disabled:text-gray-4 disabled:cursor-not-allowed touch-manipulation"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Products Pagination End --> */}
            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopWithSidebar;
