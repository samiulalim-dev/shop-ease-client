import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios/useAxios";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const axiosInstance = useAxios();

  const {
    data: product = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/productsDetails/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (product?.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" p-4 md:p-8 flex flex-col md:flex-row gap-6">
        {/* Left side (only for medium+ devices) */}
        {product.images?.length > 1 && (
          <div className="hidden md:flex md:flex-col gap-2 w-20 flex-shrink-0 overflow-y-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.productName}-${idx}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                  mainImage === img
                    ? "border-[#EDA415] border-2"
                    : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        )}

        {/* Main Image & Details */}
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          {/* Main Image */}
          <div className="md:w-1/2">
            <img
              src={mainImage || product.images?.[0]}
              alt={product.productName}
              className="w-full h-80 md:h-96 object-contain rounded-lg"
            />

            {/*  Mobile thumbnails (main image er niche) */}
            {product.images?.length > 1 && (
              <div className="flex md:hidden gap-2 mt-3 overflow-x-auto">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.productName}-${idx}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                      mainImage === img
                        ? "border-[#EDA415] border-2"
                        : "border-gray-200"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-bold dark:text-white">
              {product.productName}
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Brand: {product.brand}
            </p>

            {/* Price Section */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
              {/* Price Section */}
              <div className="flex items-center gap-3">
                {product.discount ? (
                  <>
                    <p className="text-gray-400 line-through">
                      ৳{Number(product.price).toLocaleString("en-IN")}
                    </p>
                    <p className="text-[#EDA415] font-bold text-lg">
                      ৳
                      {Math.ceil(
                        product.price - (product.price * product.discount) / 100
                      ).toLocaleString("en-IN")}
                    </p>
                  </>
                ) : (
                  <p className="text-[#EDA415] font-bold text-lg">
                    ৳{Number(product.price).toLocaleString("en-IN")}
                  </p>
                )}
              </div>

              {/* Stock Info */}
              <div className="text-gray-600 dark:text-white lg:ml-4">
                Available Stock:{" "}
                <span className="text-lg font-semibold text-green-700">
                  {product.stock} Items
                </span>
              </div>
            </div>

            <>
              {product.specification && (
                <div className="">
                  <h3 className="text-xl mb-3 font-semibold text-gray-700 dark:text-white">
                    Key Features
                  </h3>

                  <div className="space-y-3">
                    {product.specification.map((spec, index) => (
                      <div
                        key={index}
                        className="flex flex-row sm:items-start text-[15px] gap-1 sm:gap-2 dark:text-white"
                      >
                        <h5 className="font-medium ">{spec.key}:</h5>
                        <span className="break-words text-gray-700 dark:text-gray-300">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>

            <div className="dark:text-white">{product.shipping}</div>

            {/* Add to Cart Section */}
            <div className="mt-4 flex flex-row items-center gap-3 ">
              {/* Quantity Buttons */}
              <div className="flex items-center border border-[#EDA415] rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-3 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-600 transition"
                >
                  <span className="text-[#EDA415]">
                    <FaMinus />
                  </span>
                </button>
                <span className="px-4 font-semibold text-gray-700 dark:text-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-600 transition"
                >
                  <span className="text-[#EDA415] ">
                    <FaPlus />
                  </span>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className=" px-6 py-2 bg-[#EDA415] text-white rounded-lg hover:bg-orange-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* tabs */}
      {/* name of each tab group should be unique */}
      <div className="tabs max-w-screen-xl px-4 mx-auto tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab focus:text-[#EDA415] font-semibold"
          aria-label="Description"
          defaultChecked
        />
        <div className="tab-content shadow-md rounded-2xl mt-6 mb-16 border-base-300 bg-base-100 p-7">
          {product.description}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab focus:text-[#EDA415] font-semibold"
          aria-label="Reviews"
        />
        <div className="tab-content shadow-md rounded-2xl mt-6 mb-16 border-base-300 bg-base-100 p-7">
          No Reviews Yet
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
