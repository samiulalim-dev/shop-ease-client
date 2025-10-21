import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AddProductSkeleton = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-black/80 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">
        <Skeleton width={180} height={24} />
      </h2>

      <div className="space-y-4">
        {/* Product Name */}
        <div>
          <Skeleton height={18} width={100} />
          <Skeleton height={40} className="mt-2 rounded-md" />
        </div>

        {/* Price */}
        <div>
          <Skeleton height={18} width={80} />
          <Skeleton height={40} className="mt-2 rounded-md" />
        </div>

        {/* Category */}
        <div>
          <Skeleton height={18} width={120} />
          <Skeleton height={40} className="mt-2 rounded-md" />
        </div>

        {/* Image Upload */}
        <div>
          <Skeleton height={18} width={130} />
          <Skeleton height={100} className="mt-2 rounded-md" />
        </div>

        {/* Description */}
        <div>
          <Skeleton height={18} width={110} />
          <Skeleton count={3} height={20} className="mt-2 rounded-md" />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Skeleton height={45} width="100%" borderRadius={8} />
        </div>
      </div>
    </div>
  );
};

export default AddProductSkeleton;
