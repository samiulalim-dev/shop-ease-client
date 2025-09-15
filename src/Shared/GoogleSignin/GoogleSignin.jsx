import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const GoogleSignin = () => {
  const { googleSignin } = use(AuthContext);
  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        console.log(result);
        toast.success("Login successful!", {
          icon: <FaCheckCircle className="text-green-500" />,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed!", {
          icon: <FaTimesCircle className="text-red-500" />,
        });
      });
  };
  return (
    <button
      onClick={handleGoogleSignin}
      className="w-full flex cursor-pointer items-center justify-center gap-2 py-2 border border-[#EDA415] rounded-lg shadow-sm hover:bg-gray-100 transition"
    >
      <FcGoogle className="text-xl" />
      <span className="text-sm font-medium text-gray-700">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleSignin;
