import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Shared/Logo/Logo";
import { motion, AnimatePresence } from "framer-motion";
import Search from "../../Shared/Search/Search";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const SubNavbar = () => {
  const [openRightMenu, setOpenRightMenu] = useState(false);
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const { user } = use(AuthContext);
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700"
          }`
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `hover:text-[#EDA415] ${
            isActive ? "text-[#EDA415]" : "text-gray-700"
          }`
        }
      >
        About Us
      </NavLink>
      {user && (
        <NavLink
          to="/dashBoard"
          className={({ isActive }) =>
            `hover:text-[#EDA415] ${
              isActive ? "text-[#EDA415]" : "text-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>
      )}
      {!user && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `hover:text-[#EDA415] ${
              isActive ? "text-[#EDA415]" : "text-gray-700"
            }`
          }
        >
          Become a Seller
        </NavLink>
      )}
    </>
  );

  return (
    <div className=" py-3 bg-slate-100 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-3 sm:px-5 py-2">
        {/* LEFT - Browse by Categories (Mobile + Desktop) */}
        <button
          onClick={() => setOpenLeftDrawer(true)}
          className="flex items-center gap-2 font-medium text-gray-700 hover:text-[#EDA415]"
        >
          Browse by Categories <FaChevronDown className="w-3 h-3" />
        </button>
        {/* CENTER - Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {navLinks}
        </div>
        {/* RIGHT - Info (Desktop) */}
        <div className="hidden lg:block text-sm font-semibold text-[#003F62]">
          30 Days Easy Return
        </div>
        {/* MOBILE MENU BUTTON (Right Side Menu) */}
        {/* MOBILE MENU BUTTON */}{" "}
        <button
          onClick={() => setOpenRightMenu(!openRightMenu)}
          className="lg:hidden text-gray-700 hover:text-[#EDA415] text-xl"
        >
          {" "}
          <FaBars />{" "}
        </button>
      </div>

      {/* LEFT DRAWER - Browse by Categories */}
      {openLeftDrawer && (
        <div className="fixed transition duration-300 inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/10 bg-opacity-40"
            onClick={() => setOpenLeftDrawer(false)}
          ></div>

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-58 sm:w-64 h-full  shadow-lg p-4 animate-slideInLeft"
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-[#EDA415]"
              onClick={() => setOpenLeftDrawer(false)}
            >
              <FaTimes size={20} />
            </button>
            <div className=" mb-2 -ml-20 sm:-ml-7 mt-8">
              <Logo></Logo>
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

      {/* RIGHT MENU - Mobile */}
      {openRightMenu && (
        <div className="lg:hidden  border-t ">
          {" "}
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col p-3 gap-2 font-medium text-gray-700"
          >
            {" "}
            {navLinks}
            <p className="text-sm font-medium text-[#003F62] mt-2">
              {" "}
              30 Days Easy Return{" "}
            </p>{" "}
            <Search></Search>
          </motion.ul>{" "}
        </div>
      )}
    </div>
  );
};

export default SubNavbar;
