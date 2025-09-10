import React from "react";
import { Outlet } from "react-router";

const Roots = () => {
  return (
    <div>
      {/* header */}
      <div>navbar</div>
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
