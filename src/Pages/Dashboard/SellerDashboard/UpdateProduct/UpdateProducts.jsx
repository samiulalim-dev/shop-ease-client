import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { HiExclamationCircle } from "react-icons/hi2";
import { MdEditDocument } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import axios from "axios";
import useAxios from "../../../../Hooks/useAxios/useAxios";
import Swal from "sweetalert2";
import AddProductSkeleton from "../SellerSkeleton/AddProductSkeleton/AddProductSkeleton";

const UpdateProducts = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [price, setPrice] = useState("");
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ React Query with cache & staleTime to prevent refetch
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    },
  });

  // ✅ Populate form once when product first loads
  useEffect(() => {
    if (product) {
      reset({
        productName: product.productName,
        description: product.description,
        category: product.category,
        brand: product.brand,
        price: product.price,
        discount: product.discount,
        stock: product.stock,
        condition: product.condition,
        shipping: product.shipping,
      });
      setPrice(product.price || "");
      setSpecs(
        product.specification?.length
          ? product.specification
          : [{ key: "", value: "" }]
      );
      setPreviewImages(product.images || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  // ✅ Image handle
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    setValue("images", files);
  };

  // ✅ Specs handlers
  const addSpecField = () => setSpecs([...specs, { key: "", value: "" }]);
  const removeSpecField = (index) =>
    setSpecs(specs.filter((_, i) => i !== index));

  const handleSpecChange = (index, field, value) => {
    const updatedSpecs = [...specs];
    updatedSpecs[index][field] = value;
    setSpecs(updatedSpecs);
  };

  // ✅ Submit handler
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let uploadedUrls = [];

      if (data.images && data.images.length > 0) {
        const uploadPromises = Array.from(data.images).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "product_images");
          formData.append("cloud_name", "dwlpdzpui");

          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dwlpdzpui/image/upload",
            formData
          );
          return res.data.secure_url;
        });

        uploadedUrls = await Promise.all(uploadPromises);
      } else {
        uploadedUrls = product?.images || [];
      }

      const updatedData = {
        ...data,
        price,
        specification: specs,
        images: uploadedUrls,
      };

      try {
        const res = await axiosSecure.patch(
          `/updateProduct/${id}`,
          updatedData
        );
        console.log(res);
        queryClient.invalidateQueries(["product", id]);

        Swal.fire({
          title: "Product Updated!",
          text: "Your product has been successfully updated.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#EDA415",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/dashboard/my-products");
          }
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Update Failed!",
          text: "Something went wrong while updating the product.",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Loading skeleton
  if (isLoading) {
    return <AddProductSkeleton></AddProductSkeleton>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#003F62] dark:text-white flex items-center justify-center gap-2 mb-6">
        <MdEditDocument className="text-[#EDA415]" />
        <span>Update Product</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="font-medium dark:text-white text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            {...register("productName")}
            placeholder="Enter product name"
            className="input input-bordered w-full mt-1"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium dark:text-white text-gray-600">
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Write a short description"
            className="textarea textarea-bordered w-full mt-1"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="relative">
          <label className="font-medium flex items-center gap-2 dark:text-white text-gray-600">
            Product Images
            <div
              className="tooltip tooltip-right"
              data-tip="Hold CTRL (Windows) or CMD (Mac) to select multiple images"
            >
              <HiExclamationCircle size={20} className="text-[#EDA415]" />
            </div>
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="file-input file-input-bordered w-full mt-1"
          />

          <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {previewImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`preview-${index}`}
                className="w-full h-20 object-cover rounded-md border"
              />
            ))}
          </div>
        </div>

        {/* Category & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Category
            </label>
            <select
              {...register("category")}
              className="select select-bordered w-full mt-1"
            >
              <option value="">Select category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Footwear</option>
              <option>Grocery</option>
              <option>Home Appliances</option>
            </select>
          </div>

          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Brand (Optional)
            </label>
            <input
              type="text"
              {...register("brand")}
              placeholder="e.g. Samsung, Aarong"
              className="input input-bordered w-full mt-1"
            />
          </div>
        </div>

        {/* Price & Discount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Price ($)
            </label>
            <NumericFormat
              thousandSeparator=","
              value={price}
              placeholder="Enter price"
              className="input input-bordered w-full mt-1"
              onValueChange={(values) => {
                setPrice(values.value);
                setValue("price", values.floatValue);
              }}
            />
          </div>
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Discount percentage (Optional)
            </label>
            <input
              type="number"
              {...register("discount")}
              placeholder="Enter discount"
              className="input input-bordered w-full mt-1"
            />
          </div>
        </div>

        {/* Stock & Condition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Stock Quantity
            </label>
            <input
              type="number"
              {...register("stock")}
              placeholder="e.g. 50"
              className="input input-bordered w-full mt-1"
            />
          </div>
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Condition
            </label>
            <select
              {...register("condition")}
              className="select select-bordered w-full mt-1"
            >
              <option>New</option>
              <option>Used</option>
            </select>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <label className="font-medium dark:text-white text-gray-600">
            Specifications (Optional)
          </label>
          {specs.map((spec, index) => (
            <div key={index} className="flex gap-2 mt-2 items-center">
              <input
                type="text"
                placeholder="Key (e.g. RAM)"
                value={spec.key}
                onChange={(e) => handleSpecChange(index, "key", e.target.value)}
                className="input input-bordered w-1/2"
              />
              <input
                type="text"
                placeholder="Value (e.g. 8GB)"
                value={spec.value}
                onChange={(e) =>
                  handleSpecChange(index, "value", e.target.value)
                }
                className="input input-bordered w-1/2"
              />
              {specs.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSpecField(index)}
                  className="btn btn-error btn-sm text-white"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addSpecField}
            className="btn btn-sm mt-3 bg-[#EDA415] text-white"
          >
            + Add More
          </button>
        </div>

        {/* Shipping Info */}
        <div>
          <label className="font-medium dark:text-white text-gray-600">
            Shipping Info
          </label>
          <textarea
            {...register("shipping")}
            placeholder="Delivery details, charges, etc."
            className="textarea textarea-bordered w-full mt-1"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="btn bg-[#EDA415] w-full hover:bg-orange-500 rounded-lg text-white font-semibold"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Update Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProducts;
