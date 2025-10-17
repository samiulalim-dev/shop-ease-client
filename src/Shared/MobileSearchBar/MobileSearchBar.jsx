import React from "react";
import Search from "../Search/Search";
import SubNavbar from "../../Components/Navbar/SubNavbar";

const MobileSearchBar = () => {
  return (
    <div className=" ">
      <SubNavbar></SubNavbar>
      <div className="p-2 max-w-md mx-auto my-1 bg-white">
        <Search></Search>
      </div>
    </div>
  );
};

export default MobileSearchBar;
