import React, { use, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottieFiles/login.json";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleSignin from "../../Shared/GoogleSignin/GoogleSignin";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [seePassword, setSeePassword] = useState(true);
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then((result) => {
        // console.log(result);
        toast.success("Login successfully!");
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        toast.error("Please provide valid email & password");
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen py-16 flex flex-col md:flex-row items-center justify-center bg-gray-50 px-4 sm:px-8 lg:px-16">
      {/* LEFT - Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003F62] mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={seePassword ? "password" : "text"}
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />

            <button
              onClick={() => setSeePassword(!seePassword)}
              type="button"
              className=" absolute cursor-pointer top-9 right-3"
            >
              {seePassword ? (
                <FaEye size={20}></FaEye>
              ) : (
                <FaEyeSlash size={20}></FaEyeSlash>
              )}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
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
        <GoogleSignin></GoogleSignin>
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
