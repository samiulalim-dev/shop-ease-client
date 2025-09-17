import React, { use, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Roots = () => {
  const [showTopNav, setShowTopNav] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowTopNav(false);
      } else if (
        currentScroll < lastScrollY &&
        currentScroll < window.innerHeight * 0.1
      ) {
        setShowTopNav(true);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* header */}
      {/* top navbar */}
      <section className=" hidden lg:block">
        <div
          className={`text-black dark:text-white container px-1 mx-auto py-5 flex items-center justify-between ${
            showTopNav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <p className=" text-sm">
            {" "}
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          </p>
          <div className="flex gap-6">
            <Link to="/help-center" className="hover:text-[#EDA415]">
              Help Center
            </Link>
            <Link className="hover:text-[#EDA415]">Track Your Order</Link>
          </div>
        </div>
      </section>
      {/* center navbar */}
      <div
        className={` sticky top-0 z-50  lg:${
          isSticky ? "sticky top-0 z-50" : ""
        }`}
      >
        <Navbar></Navbar>
      </div>
      {/* main */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
