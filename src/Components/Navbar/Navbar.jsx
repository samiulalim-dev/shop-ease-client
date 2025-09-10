import React from "react";
import Logo from "../../Shared/Logo/Logo";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <section>
      {/* start navbar */}
      <div className="bg-[#003F62] shadow-sm ">
        <div className="navbar justify-between px-1 sm:w-11/12 mx-auto">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-23 sm:flex-1">
            {/* Logo */}
            <Logo />

            {/* Search field (hidden on mobile) */}
            <div className="hidden lg:flex items-center flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="input rounded-r-none input-bordered w-full rounded-l-xl focus:outline-none"
              />
              <button className="btn shadow-none bg-[#EDA415] hover:bg-orange-500 border-none rounded-l-none rounded-r-xl text-white">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="navbar-end gap-2 sm:gap-5">
            {/* Wishlist */}
            <button className="relative cursor-pointer text-white hover:text-[#EDA415]">
              <FaHeart size={20} />
            </button>

            {/* Cart */}
            <button className="relative cursor-pointer text-white hover:text-[#EDA415]">
              <FaShoppingCart size={20} />
            </button>

            {/* Login/Register */}
            <div className=" text-white">
              <Link className="  hover:text-[#EDA415]">Login</Link> |{" "}
              <Link className="  hover:text-[#EDA415]">Register</Link>
            </div>
          </div>
        </div>
      </div>
      {/* end navbar */}
      <div></div>
    </section>
  );
};

export default Navbar;
