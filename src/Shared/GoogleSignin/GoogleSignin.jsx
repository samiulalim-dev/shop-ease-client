import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxios from "../../Hooks/useAxios/useAxios";
import { useNavigate } from "react-router";

const GoogleSignin = () => {
  const { googleSignin } = use(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        console.log(result);
        axiosInstance
          .post("/user", {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
            role: "user",
            createdAt: new Date(),
          })
          .then((res) => {
            // console.log(res.data);
          })
          .catch((error) => {
            console.log("Failed to save user to DB:", error);
          });
        toast.success("Login successful!", {
          icon: <FaCheckCircle className="text-green-500" />,
        });
        navigate("/");
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
