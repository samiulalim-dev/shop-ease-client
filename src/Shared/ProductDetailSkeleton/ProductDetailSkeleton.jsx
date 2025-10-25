import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-6">
      {/* Left Thumbnails */}
      <div className="hidden md:flex md:flex-col gap-2 w-20">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <Skeleton key={idx} height={64} width={64} className="rounded-lg" />
          ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Main Image */}
        <Skeleton height={384} className="rounded-lg w-full" />

        {/* Thumbnails for Mobile */}
        <div className="flex md:hidden gap-2 mt-3 overflow-x-auto">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <Skeleton
                key={idx}
                height={80}
                width={80}
                className="rounded-lg"
              />
            ))}
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <Skeleton height={32} width="50%" />
          <Skeleton height={24} width="30%" />
          <div className="flex items-center gap-4">
            <Skeleton height={24} width={80} />
            <Skeleton height={24} width={60} />
          </div>
          <Skeleton height={40} width="30%" />
          <Skeleton height={16} count={4} />
        </div>

        {/* Specifications */}
        <div className="mt-4">
          <Skeleton height={24} width="40%" />
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex gap-2 mt-2">
                <Skeleton height={20} width={80} />
                <Skeleton height={20} width={120} />
              </div>
            ))}
        </div>

        {/* Description */}
        <div className="mt-4">
          <Skeleton height={24} width="30%" />
          <Skeleton height={16} count={5} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
