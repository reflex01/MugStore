"use client";

const ProductSkeleton = () => {
  return (
    <div className="group relative bg-white rounded-2xl lg:rounded-3xl shadow-md lg:shadow-lg overflow-hidden border border-gray-200 animate-pulse">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden rounded-t-2xl lg:rounded-t-3xl bg-gray-200 aspect-square">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-4 lg:p-6">
        {/* Rating Skeleton */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>

        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Price Skeleton */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="h-6 lg:h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 lg:h-5 w-16 bg-gray-200 rounded"></div>
          </div>
          
          {/* Mobile Actions Skeleton */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
            <div className="w-20 h-10 bg-gray-200 rounded-xl"></div>
          </div>
        </div>

        {/* Features Skeleton */}
        <div className="w-32 h-6 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;