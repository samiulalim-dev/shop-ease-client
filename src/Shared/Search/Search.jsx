import React from "react";

const Search = () => {
  return (
    <div className="flex items-center flex-1 max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        className="input rounded-r-none input-bordered w-full rounded-l-xl focus:outline-none"
      />
      <button className="btn shadow-none bg-[#EDA415] hover:bg-orange-500 border-none rounded-l-none rounded-r-xl text-white">
        Search
      </button>
    </div>
  );
};

export default Search;
