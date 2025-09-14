import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottieFiles/Page Not Found 404 .json";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Lottie Animation */}
      <div className="w-full max-w-md">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>

      {/* Error Text */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#003F62] mt-6">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="px-6 py-3 cursor-pointer bg-[#EDA415] hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
