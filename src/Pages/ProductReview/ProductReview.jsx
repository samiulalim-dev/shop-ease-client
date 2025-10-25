import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/AxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";

const ProductReview = ({ productId }) => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Fetch reviews from backend
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/productReviews/${productId}`);
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    if (!user) return toast.error("You must login to submit a review!");
    if (selectedRating === 0) return toast.error("Please select a rating!");

    const reviewData = {
      ...data,
      userName: user?.displayName,
      userEmail: user?.email,
      productId,
      rating: selectedRating,
      createdAt: new Date(),
    };

    setLoading(true);
    try {
      const res = await axiosSecure.post("/productReview", reviewData);
      if (res.data.success) {
        toast.success("Review submitted!");
        reset();
        setSelectedRating(0);
        queryClient.invalidateQueries(["reviews", productId]); // Refresh reviews
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

      {/* Review Form */}
      {user && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mb-6"
        >
          {/* Comment */}
          <textarea
            {...register("comment", { required: true })}
            placeholder="Write your review..."
            className="textarea textarea-bordered w-full"
          ></textarea>

          {/* Star Rating */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                className={`cursor-pointer ${
                  (hoverRating || selectedRating) >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setSelectedRating(star)}
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#EDA415] text-white w-1/4 mt-2 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}

      {/* Reviews List */}
      {isLoading ? (
        <p>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        reviews.map((review, idx) => (
          <div
            key={idx}
            className="border-b border-gray-300 dark:border-gray-600 py-3"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">{review.userName}</h4>
              <span className="text-yellow-400">
                {"⭐".repeat(review.rating || 0)}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
            <small className="text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductReview;
