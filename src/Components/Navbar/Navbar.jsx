import React, { use, useState } from "react";
import Logo from "../../Shared/Logo/Logo";
import { FaArrowLeft, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Search from "../../Shared/Search/Search";
import ThemeToggle from "../ThemeToogle/ThemeToogle";
import SubNavbar from "./SubNavbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import StartNavbar from "./StartNavbar";

const Navbar = () => {
  return (
    <section>
      {/* start navbar */}
      <div>
        <StartNavbar></StartNavbar>
      </div>
      {/* sub navbar */}
      <div>
        <SubNavbar></SubNavbar>
      </div>
    </section>
  );
};

export default Navbar;
