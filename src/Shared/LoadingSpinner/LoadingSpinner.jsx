import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EDA415] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#EDA415] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Shopping Bag with Glow Effect */}
        <div className="relative mb-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 animate-ping">
            <FaShoppingBag className="w-16 h-16 text-[#EDA415] opacity-20" />
          </div>
          {/* Main Icon */}
          <div className="relative animate-bounce">
            <FaShoppingBag className="w-16 h-16 text-[#EDA415] drop-shadow-2xl filter" />
          </div>
        </div>

        {/* Brand Name with Gradient */}
        <div className="mb-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#EDA415] via-yellow-300 to-[#EDA415] bg-clip-text text-transparent animate-shimmer">
            ShopEase
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-8 animate-fade-in">
          Preparing your shopping experience...
        </p>

        {/* Enhanced Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-[#EDA415] to-yellow-400 animate-progress-slide shadow-lg" />
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2 mt-6">
          <div
            className="w-2 h-2 bg-[#EDA415] rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-[#EDA415] rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-[#EDA415] rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes progress-slide {
          0% {
            width: 0%;
            opacity: 1;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0.7;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-progress-slide {
          animation: progress-slide 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Loading;
