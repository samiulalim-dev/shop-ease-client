import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ExploreProductsSkeleton = () => {
  // ধরো তুমি প্রতি পেজে 8টা প্রোডাক্ট দেখাও
  const skeletonItems = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mt-6">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-black/40 rounded-xl shadow-md p-4 flex flex-col"
        >
          {/* Product Image Skeleton */}
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Skeleton height="100%" width="100%" />
          </div>

          {/* Product Name */}
          <Skeleton height={20} width="80%" />

          {/* Product Description */}
          <Skeleton count={2} height={15} width="100%" className="mt-2" />

          {/* Price Section */}
          <div className="flex justify-between items-center mt-3">
            <Skeleton height={20} width={60} />
            <Skeleton height={20} width={50} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreProductsSkeleton;
