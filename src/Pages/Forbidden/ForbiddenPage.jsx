// src/Pages/ForbiddenPage.jsx
import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/lottieFiles/Page Not Found 404 .json";
import { Link } from "react-router";

const ForbiddenPage = () => {
  return (
    <div className="min-h-screen dark:bg-black/87 flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Lottie Animation */}
      <div className="w-full max-w-md mb-6">
        <Lottie animationData={forbiddenAnimation} loop={true} />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold dark:text-white text-[#003F62] mb-4 text-center">
        Access Denied
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 dark:text-white text-center mb-6">
        You don’t have permission to view this page.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-6 py-3 cursor-pointer bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ForbiddenPage;
