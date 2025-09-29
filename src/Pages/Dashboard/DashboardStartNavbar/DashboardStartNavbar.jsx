import React, { use } from "react";
import { FaArrowLeft, FaBars, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ThemeToggle from "../../../Components/ThemeToogle/ThemeToogle";
import Logo from "../../../Shared/Logo/Logo";
import { toast } from "react-toastify";
const DashboardStartNavbar = ({ setSidebarOpen }) => {
  const { user, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-[#003F62] shadow-sm ">
      <div className="navbar justify-between px-2 sm:max-w-screen-xl mx-auto">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Sidebar Toggle */}
          <button
            className="lg:hidden text-white hover:text-[#EDA415]"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars size={24} />
          </button>
          <Logo />
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end  gap-2 sm:gap-4">
          <div className="  items-center flex">
            <ThemeToggle></ThemeToggle>
          </div>
          {/* Wishlist */}
          <button className="relative cursor-pointer text-white hover:text-[#EDA415]">
            <FaHeart size={20} />
          </button>

          {/* Cart */}
          <button className="relative cursor-pointer text-white hover:text-[#EDA415]">
            <FaShoppingCart size={20} />
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative"
              >
                <div className="rounded-full border-2 border-[#EDA415] shadow-md overflow-hidden">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/8j7kL8D/default-avatar.png"
                    }
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Active status dot */}
                <span className="absolute bottom-1 right-1 block w-3 h-3 rounded-full bg-green-500 ring-2 ring-white"></span>
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow-lg bg-white rounded-xl w-56 "
              >
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#EDA415] shadow-md">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co/8j7kL8D/default-avatar.png"
                      }
                      alt="User"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-800">
                    {user?.displayName || "Anonymous User"}
                  </h3>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-2"></div>

                {/* Actions */}

                <li>
                  <button
                    onClick={handleSignOut}
                    className="px-5 cursor-pointer py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              {/* Login/Register */}
              <div className=" flex items-center gap-1 text-white">
                <Link to="/login" className="  hover:text-[#EDA415]">
                  Login
                </Link>{" "}
                <span className="sm:block hidden">|</span>{" "}
                <Link
                  to="/register"
                  className=" sm:block hidden  hover:text-[#EDA415]"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardStartNavbar;
