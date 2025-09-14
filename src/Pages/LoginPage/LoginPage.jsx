import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottieFiles/login.json";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="min-h-screen py-16 flex flex-col md:flex-row items-center justify-center bg-gray-50 px-4 sm:px-8 lg:px-16">
      {/* LEFT - Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003F62] mb-6">
          Welcome Back
        </h2>
        <form className="space-y-5">
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <a href="#" className="text-[#EDA415] hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-gray-600 mt-5 text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#EDA415] font-medium hover:underline"
          >
            Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="w-full flex cursor-pointer items-center justify-center gap-2 py-2 border border-[#EDA415] rounded-lg shadow-sm hover:bg-gray-100 transition">
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>
      </div>

      {/* google login */}

      {/* RIGHT - Lottie Animation */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center p-6">
        <Lottie
          animationData={loginAnimation}
          loop={true}
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default LoginPage;
