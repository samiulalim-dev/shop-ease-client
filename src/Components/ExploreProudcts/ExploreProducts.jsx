import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios/useAxios";

const ExploreProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const axiosInstance = useAxios();

  // Fetch products from backend
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/products?page=${currentPage}&limit=${limit}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  if (isError)
    return <p className="text-center text-red-500">Failed to load products!</p>;

  const { products = [], totalPages } = data || {};
  // console.log(data);
  // console.log(products);

  return (
    <section className="max-w-screen-xl mx-auto px-4 my-8 md:my-16">
      <h2 className="pb-8 dark:text-white text-[#003F62] text-3xl font-bold text-center">
        Explore Our Products
      </h2>

      {/* Products Grid */}
      {isLoading ? (
        <div className="flex justify-center py-10">
          <FaSpinner className="animate-spin text-4xl text-[#EDA415]" />
        </div>
      ) : (
        <div>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white dark:bg-black/50 z-10 rounded-xl shadow-xl hover:shadow-xl transition sm:p-4 flex flex-col justify-between"
                >
                  {/* Product Image Section */}
                  <div className="relative w-full overflow-hidden rounded-bl-none rounded-br-none rounded-tl-lg rounded-tr-lg sm:rounded-lg group">
                    {/* Discount Badge */}
                    {product.discount && (
                      <span className="absolute top-2 z-10 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    )}

                    {/* Product Image */}
                    <div className="overflow-hidden">
                      <img
                        src={product.images?.[0]}
                        alt={product.productName}
                        className="w-full  h-48 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Product Info Section */}
                  <div className="sm:mt-4 mt-2 flex flex-col justify-between flex-grow">
                    <h3 className="sm:font-semibold dark:text-white text-gray-800 px-1 sm:px-0 sm:text-lg truncate">
                      {product.productName}
                    </h3>
                    <p className="text-gray-500 px-1 sm:px-0 dark:text-white text-sm mt-1 line-clamp-2">
                      {product.description || "No description available."}
                    </p>

                    {/* Price Section */}
                    <div className="flex px-1 sm:px-0 justify-between items-center mt-2 sm:mt-3">
                      {/* Original Price */}
                      <p className="text-gray-400  line-through text-[13px] sm:text-[17px]">
                        ৳{Number(product.price).toLocaleString("en-IN")}
                      </p>

                      {/* Discounted Price */}
                      <p className="text-[#EDA415] font-bold text-sm sm:text-lg">
                        ৳
                        {Math.ceil(
                          product.price -
                            (product.price * (product.discount || 0)) / 100
                        ).toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="px-5 mx-1 sm:mx-0 mb-3 mt-2 sm:mt-0 sm:mb-0 cursor-pointer py-2  border-2 text-[#EDA415] border-[#EDA415] hover:text-white hover:bg-orange-500 rounded-lg dark:text-white font-semibold shadow-md transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-10 text-gray-500">
              No products found!
            </p>
          )}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 text-black cursor-pointer dark:text-white py-1 border border-black dark:border-white rounded-lg disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 cursor-pointer border rounded-lg ${
              currentPage === i + 1
                ? "bg-[#EDA415] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1  border text-black dark:text-white cursor-pointer border-black dark:border-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
