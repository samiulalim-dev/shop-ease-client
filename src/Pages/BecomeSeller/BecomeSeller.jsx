import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import marketPlace from "../../assets/lottieFiles/marketplace.json";
import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const BecomeSellerPage = () => {
  const [uploading, setUploading] = useState(false);
  const [seePassword, setSeePassword] = useState(true);
  const [photo, setPhoto] = useState("");
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const sellerData = { ...data };
    const photoFile = data.photo[0];

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
        sellerData.photo = photoUrl;
        // console.log(
        //   sellerData.email,
        //   sellerData.fullName,
        //   sellerData.password,
        //   sellerData.photo
        // );
        const name = sellerData.fullName;
        const email = sellerData.email;
        const password = sellerData.password;
        const photo = sellerData.photo;
        // create user
        createUser(email, password)
          .then((result) => {
            updateUser(name, photo)
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
              photoURL: photo,
            });

            toast.success("Seller account created successfully!");
            navigate("/");
            reset();
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

    // toast.success("Seller account created successfully!");
    // reset();
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row py-12 items-center justify-center bg-gray-50 px-4 dark:bg-black/87 sm:px-8 lg:px-16">
      {/* LEFT - Form */}
      <div className="w-full lg:w-1/2 mx-auto bg-white dark:bg-black/87 shadow-lg rounded-2xl p-6 sm:p-10">
        <h2 className="text-2xl dark:text-white sm:text-3xl font-bold text-[#003F62] mb-6">
          Become a Seller
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium dark:text-white text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              placeholder="Enter your name"
              className="w-full px-4 py-2 dark:border-white dark:text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Shop Name */}
          <div>
            <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">
              Shop Name
            </label>
            <input
              type="text"
              {...register("shopName", { required: "Shop name is required" })}
              placeholder="Enter shop name"
              className="w-full px-4 py-2 dark:text-white dark:border-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.shopName && (
              <p className="text-red-500 text-sm">{errors.shopName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="">
            <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              placeholder="Enter your email"
              className="w-full dark:border-white dark:text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">
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
                validate: {
                  hasUpper: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain an uppercase letter",
                  hasLower: (value) =>
                    /[a-z]/.test(value) ||
                    "Password must contain a lowercase letter",
                },
              })}
              placeholder="Enter password"
              className="w-full dark:text-white dark:border-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />

            <button
              onClick={() => setSeePassword(!seePassword)}
              type="button"
              className=" absolute cursor-pointer top-9 right-3"
            >
              {seePassword ? (
                <FaEye className="dark:text-white" size={20}></FaEye>
              ) : (
                <FaEyeSlash className="dark:text-white" size={20}></FaEyeSlash>
              )}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block dark:text-white text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border dark:border-white dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Shop Logo */}
          <div>
            <label className="block dark:text-white text-sm font-medium text-gray-700 mb-1">
              Shop Logo
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("photo")}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 dark:text-border dark:text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">
              Shop Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              placeholder="Enter shop address"
              className="w-full px-4 py-2 border dark:text-white dark:border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EDA415]"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className={`w-full py-2 cursor-pointer ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#EDA415] hover:bg-orange-500"
            } rounded-lg text-white font-semibold shadow-md transition`}
          >
            {uploading ? "Uploading..." : "Register as a seller"}
          </button>
        </form>
      </div>
      {/* Right - Animation */}
      <div className="md:flex w-full lg:w-1/2 justify-center items-center  md:p-6">
        <Lottie animationData={marketPlace}></Lottie>
      </div>
    </div>
  );
};

export default BecomeSellerPage;
