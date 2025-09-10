import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const Roots = () => {
  return (
    <div>
      {/* header */}
      <div>
        <Navbar></Navbar>
      </div>
      {/* main */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <div>Footer</div>
    </div>
  );
};

export default Roots;
