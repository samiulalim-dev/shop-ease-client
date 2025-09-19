import React, { useState } from "react";

const ExploreProducts = () => {
  // Dummy Data
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (10 + i) * 5,
    img: `https://picsum.photos/200/200?random=${i + 1}`,
  }));

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="pb-8 dark:text-white text-[#003F62] text-3xl font-bold text-center">
        Explore Our Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-gray-700">{product.name}</h3>
            <p className="text-[#EDA415] font-bold">${product.price}</p>
            <button className="mt-3 cursor-pointer px-4 py-2 bg-[#EDA415] text-white rounded-lg hover:bg-orange-500 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

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
            className={`px-3 py-1 border rounded-lg ${
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
          className="px-3 py-1 border text-black dark:text-white cursor-pointer border-black dark:border-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
