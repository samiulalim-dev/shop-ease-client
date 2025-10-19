import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { HiExclamationCircle } from "react-icons/hi2";

const AddProduct = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    setValue("images", files); // file save in react hook form
  };
  const onSubmit = async (data) => {
    setIsLoading(true);

    // simulate API request

    console.log(data);
    toast.success("✅ Product added successfully!");
    setIsLoading(false);
    reset();
    setPreviewImages([]);
  };

  return (
    <div className="max-w-3xl mx-auto dark:bg-black/7 bg-white p-8 rounded-2xl shadow-lg mt-3">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#003F62] dark:text-white flex items-center justify-center gap-2 mb-6">
        <MdAddShoppingCart className="text-[#EDA415]" />
        <span>Add New Product</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="font-medium dark:text-white text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            {...register("productName", { required: true })}
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
            {...register("description", { required: true })}
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
              data-tip="Hold CTRL (Windows) or CMD (Mac) and click to select multiple images"
            >
              <span className="text-[#EDA415]  cursor-pointer">
                <HiExclamationCircle size={20} />
              </span>
            </div>
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            required
            className="file-input file-input-bordered w-full mt-1"
          />

          {/* preview section */}
          {previewImages.length > 0 && (
            <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-3">
              {previewImages.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img}
                    alt={`preview-${index}`}
                    className="w-full h-20 object-cover rounded-md border"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Category
            </label>
            <select
              {...register("category", { required: true })}
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
              Brand
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
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Enter price"
              className="input input-bordered w-full mt-1"
            />
          </div>
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Discount Price (Optional)
            </label>
            <input
              type="number"
              {...register("discount")}
              placeholder="Enter discount price"
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
              {...register("stock", { required: true })}
              placeholder="e.g. 50"
              className="input input-bordered w-full mt-1"
            />
          </div>
          <div>
            <label className="font-medium dark:text-white text-gray-600">
              Condition
            </label>
            <select
              {...register("condition", { required: true })}
              className="select select-bordered w-full mt-1"
            >
              <option>New</option>
              <option>Used</option>
            </select>
          </div>
        </div>

        {/* Shipping Info */}
        <div>
          <label className="font-medium dark:text-white text-gray-600">
            Shipping Info
          </label>
          <textarea
            {...register("shipping", { required: true })}
            placeholder="Delivery details, charges, etc."
            className="textarea textarea-bordered w-full mt-1"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="btn bg-[#EDA415] w-full hover:bg-orange-500 rounded-lg text-white font-semibold"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
