import { useForm } from "react-hook-form";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { HiExclamationCircle } from "react-icons/hi2";
import axios from "axios";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { NumericFormat } from "react-number-format";

const AddProduct = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);
  const [price, setPrice] = useState("");
  const axiosSecure = useAxiosSecure();
  const addSpecField = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };
  const removeSpecField = (index) => {
    const newSpecs = specs.filter((_, i) => i !== index);
    setSpecs(newSpecs);
  };
  const handleSpecChange = (index, field, value) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = value;
    setSpecs(newSpecs);
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
    setValue("images", files); // file save in react hook form
  };
  const onSubmit = async (data) => {
    setIsLoading(true);
    const files = data.images;
    const uploadedUrls = [];
    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "product_images");
        formData.append("cloud_name", "dwlpdzpui");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dwlpdzpui/image/upload",
          formData
        );
        uploadedUrls.push(res.data.secure_url);
      }
    } catch (error) {
      console.error("Cloudinary upload failed", error);
      toast.error("❌ Image upload failed");
      setIsLoading(false);
      return;
    }
    // console.log(uploadedUrls);

    // simulate API request

    const productData = {
      ...data,
      images: uploadedUrls,
      specification: specs,
    };
    const cleanData = Object.fromEntries(
      Object.entries(productData).filter(
        ([_, v]) => v !== undefined && v !== ""
      )
    );
    try {
      const res = await axiosSecure.post("/productDetails", cleanData);
      console.log(res.data);
      if (res.data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Added Successfully!",
          showConfirmButton: false,
          timer: 1700,
        });
      }
    } catch (error) {
      toast.error("Failed to add product!");
    }

    // console.log(productData);
    setIsLoading(false);
    reset();
    setSpecs([{ key: "", value: "" }]);
    setPrice("");
    setPreviewImages([]);
  };

  return (
    <div className="max-w-3xl mx-auto dark:bg-black/7 bg-white p-8 rounded-2xl shadow-lg mt-2">
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
        {/* product specification */}
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
