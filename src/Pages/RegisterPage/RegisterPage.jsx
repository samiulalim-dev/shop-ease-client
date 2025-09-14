import React from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import registerAnimation from "../../assets/lottieFiles/registerAnimation.json";

const RegisterPage = () => {
  const handleGoogleRegister = () => {
    console.log("Google Register Clicked");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row py-16 items-center justify-center bg-gray-50 px-4 sm:px-8 lg:px-16">
      {/* LEFT - Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003F62] mb-6">
          Create an Account
        </h2>
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Register Button */}
        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center cursor-pointer gap-2 py-2 border border-[#EDA415] rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Already Have an Account */}
        <p className="text-sm text-gray-600 mt-5 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#EDA415] font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>

      {/* RIGHT - Lottie Animation */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center p-6">
        <Lottie
          animationData={registerAnimation}
          loop={true}
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
