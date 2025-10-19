import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaHome,
  FaBoxOpen,
  FaInfoCircle,
  FaUserCircle,
  FaStore,
  FaSearch,
} from "react-icons/fa";
import Logo from "../../Shared/Logo/Logo";
import { motion } from "framer-motion";
import Search from "../../Shared/Search/Search";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import { CiSearch } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";

const SubNavbar = () => {
  const [openRightMenu, setOpenRightMenu] = useState(false);
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const { user } = use(AuthContext);
  const { role, isRoleLoading } = useUserRole();

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` flex items-center text-sm lg:text-[16px] flex-col lg:flex-row lg:gap-2  hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700  dark:text-white"
          }`
        }
      >
        <FaHome className="text-lg" /> Home
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          ` lg:hidden flex items-center text-sm lg:text-[16px] flex-col lg:flex-row lg:gap-2  hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700  dark:text-white"
          }`
        }
      >
        <FaSearch className="text-lg" />
        Search
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `flex items-center  text-sm lg:text-[16px] flex-col lg:flex-row lg:gap-2  hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700 dark:text-white"
          }`
        }
      >
        <FaBoxOpen className="text-lg" /> Products
      </NavLink>

      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `flex items-center  text-sm lg:text-[16px] flex-col lg:flex-row lg:gap-2 hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700 dark:text-white"
          }`
        }
      >
        <FaInfoCircle className="text-lg" /> About
        <span className="lg:block hidden">Us</span>
      </NavLink>

      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center flex-col  text-sm lg:text-[16px] lg:flex-row lg:gap-2 hover:text-[#EDA415] ${
              isActive ? "text-[#EDA415]" : "text-gray-700 dark:text-white"
            }`
          }
        >
          <FaUserCircle className="text-lg" />{" "}
          {isRoleLoading ? (
            <Skeleton width={70} height={18} borderRadius={8} />
          ) : role === "user" ? (
            "Account"
          ) : (
            "Dashboard"
          )}
        </NavLink>
      )}

      {!user && (
        <NavLink
          to="/becomeSeller"
          className={({ isActive }) =>
            `flex items-center  text-sm lg:text-[16px] flex-col lg:flex-row lg:gap-2 hover:text-[#EDA415] ${
              isActive ? "text-[#EDA415]" : "text-gray-700 dark:text-white"
            }`
          }
        >
          <FaStore className="text-lg" />{" "}
          <span className="hidden lg:block">Become a </span>Seller
        </NavLink>
      )}
    </>
  );

  return (
    <>
      {/* TOP NAVBAR - for large screens */}
      <div className="py-3 dark:bg-black/95 bg-slate-100 shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 sm:px-5 py-2">
          {/* Left - Browse by Categories */}
          <button
            onClick={() => setOpenLeftDrawer(true)}
            className="flex cursor-pointer items-center gap-1 sm:gap-2 font-medium dark:text-white hover:text-[#EDA415]"
          >
            Shop by Categories <FaChevronDown className="w-3 h-3" />
          </button>
          {/* CENTER - Links */}
          <div className="lg:flex hidden  items-center gap-6 font-medium text-gray-700">
            {navLinks}
          </div>
          {/* RIGHT - Info */}
          <div className="text-sm font-semibold dark:text-white text-[#003F62]">
            30 Days Easy Return
          </div>
        </div>
      </div>

      {/* LEFT DRAWER */}
      {openLeftDrawer && (
        <div className="fixed transition duration-300 inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/10 bg-opacity-40"
            onClick={() => setOpenLeftDrawer(false)}
          ></div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-58 sm:w-64 h-full shadow-lg p-4"
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-[#EDA415]"
              onClick={() => setOpenLeftDrawer(false)}
            >
              <FaTimes size={20} />
            </button>

            <div className="mb-2 -ml-20 sm:-ml-7 mt-8">
              <Logo />
            </div>

            <h3 className="text-lg font-semibold text-[#1B5A7D] mb-4">
              Shop By Categories
            </h3>

            <ul className="space-y-2 text-gray-700 font-medium">
              <li>
                <Link className="block px-2 py-2 hover:bg-gray-100 rounded-md">
                  Electronics
                </Link>
              </li>
              <li>
                <Link className="block px-2 py-2 hover:bg-gray-100 rounded-md">
                  Clothing
                </Link>
              </li>
              <li>
                <Link className="block px-2 py-2 hover:bg-gray-100 rounded-md">
                  Shoes
                </Link>
              </li>
              <li>
                <Link className="block px-2 py-2 hover:bg-gray-100 rounded-md">
                  Accessories
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      )}

      {/* BOTTOM NAVBAR - for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0  dark:bg-black bg-white  shadow-md z-50">
        <div className="flex justify-around items-center py-2 text-gray-700">
          {navLinks}
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
