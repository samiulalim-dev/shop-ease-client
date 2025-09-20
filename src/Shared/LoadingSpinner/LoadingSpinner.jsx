import React from "react";
// import { ShoppingBag } from "lucide-react";
import { FaShoppingBag } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center bg-black/10 justify-center min-h-screen ">
      {/* Animated Shopping Bag Icon */}
      <div className="animate-bounce">
        <FaShoppingBag className="w-16 h-16 text-[#EDA415]" />
      </div>

      {/* Loading Text */}
      <h1 className="mt-6 text-2xl font-bold text-white animate-pulse">
        ShopEase Loading...
      </h1>

      {/* Progress Bar */}
      <div className="w-48 h-2 mt-4  rounded-full overflow-hidden">
        <div className="h-full bg-[#EDA415] animate-[progress_2s_ease-in-out]" />
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes progress {
            0% { width: 0% }
            50% { width: 80% }
            100% { width: 0% }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
