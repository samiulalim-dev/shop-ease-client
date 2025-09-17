import React, { use, useState } from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import registerAnimation from "../../assets/lottieFiles/registerAnimation.json";
import GoogleSignin from "../../Shared/GoogleSignin/GoogleSignin";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [seePassword, setSeePassword] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const { createUser, updateUser, setUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photoFile = data.photo[0]; // file input

    // preview
    setPreview(URL.createObjectURL(photoFile));

    // upload to imgbb
    const formData = new FormData();
    formData.append("image", photoFile);

    try {
      setUploading(true);
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imagebbApiKey
        }`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await res.json();
      setUploading(false);

      if (imgData.success) {
        const photoUrl = imgData.data.url;

        // create user
        createUser(email, password)
          .then((result) => {
            updateUser(name, photoUrl)
              .then(() => {
                console.log("User updated with name & photo");
              })
              .catch((error) => {
                console.error("Update failed:", error.message);
              });

            //  setUser
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photoUrl,
            });

            toast.success("User created successfully!");
            navigate("/");
            reset();
            setPreview(null);
          })
          .catch((error) => {
            toast.error(error.message);
            console.log(error.message);
          });
      }
    } catch (error) {
      setUploading(false);
      console.error("Image upload failed", error);
      toast.error("Image upload failed!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row py-16 items-center justify-center bg-gray-50 px-4 sm:px-8 lg:px-16">
      {/* LEFT - Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003F62] mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("photo")}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />

            {/* Image preview */}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-24 h-24 object-cover rounded-lg mt-3"
              />
            )}
          </div>

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
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  message:
                    "Password must contain at least one uppercase and one lowercase letter",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 cursor-pointer bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition"
          >
            {uploading ? "Uploading..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Register Button */}
        <GoogleSignin></GoogleSignin>

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
