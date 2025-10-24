import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../Hooks/useAxios/useAxios";

const ProductDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const axiosInstance = useAxios();
  const {
    data: product = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/productsDetails/${id}`);
      return res.data;
    },
  });

  // Set main image when data is loaded
  React.useEffect(() => {
    if (product?.images?.length) setMainImage(product.images[0]);
  }, [product]);
  //   console.log(product);
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-6">
      {/* Left Side: Thumbnails */}
      {product.images?.length > 1 && (
        <div className="flex md:flex-col gap-2 md:w-20 overflow-x-auto md:overflow-y-auto">
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

      {/* Right Side: Main Image + Details */}
      <div className="flex-1 flex flex-col md:flex-row gap-6">
        {/* Main Image */}
        <div className="flex-1">
          <img
            src={mainImage || product.images?.[0]}
            alt={product.productName}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold dark:text-white">
            {product.productName}
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            {product.shortDescription || "No short description available."}
          </p>

          {/* Price Section */}
          <div className="flex items-center gap-4">
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
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                  -{product.discount}%
                </span>
              </>
            ) : (
              <p className="text-[#EDA415] font-bold text-lg">
                ৳{Number(product.price).toLocaleString("en-IN")}
              </p>
            )}
          </div>

          {/* Add to Cart */}
          <button className="mt-4 w-full md:w-1/2 px-4 py-2 bg-[#EDA415] text-white rounded-lg hover:bg-orange-500 transition">
            Add to Cart
          </button>

          {/* Full Description */}
          <div className="mt-6 text-gray-600 dark:text-gray-300">
            <h2 className="font-semibold mb-2">Product Details</h2>
            <p>{product.description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
