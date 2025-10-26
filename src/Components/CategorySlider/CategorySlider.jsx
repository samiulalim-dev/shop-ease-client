import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const CategorySlider = () => {
  const swiperRef = useRef(null);
  const axiosInstance = useAxios();
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categoriesWithCount"],
    queryFn: async () => {
      const res = await axiosInstance.get("/categoriesWithCount");
      return res.data;
    },
  });

  return (
    <div className="relative max-w-6xl mx-auto px-4 my-8 md:my-12">
      {/* Custom Prev Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-1 cursor-pointer top-1/2 -translate-y-1/2 z-10 bg-[#EDA415] text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition"
      >
        <FaArrowLeft size={18} />
      </button>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 }, // sm
          768: { slidesPerView: 2 }, // md
          1024: { slidesPerView: 3 }, // lg
        }}
        className="mySwiper"
      >
        {isLoading ? (
          [...Array(3)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="h-24 bg-gray-200 rounded-2xl animate-pulse"></div>
            </SwiperSlide>
          ))
        ) : (
          <>
            {categories.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="px-3">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-black border border-gray-400 rounded-2xl shadow hover:shadow-md transition">
                    {/* Left: Image */}
                    <img
                      src={item.image?.[0] || "https://via.placeholder.com/64"}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />

                    <div className="divider divider-horizontal divider-start"></div>
                    {/* Right: Info */}
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white text-[#003F62]">
                        {item._id}
                      </h3>
                      <p className="text-sm dark:text-white text-[#003F62]">
                        ( {item.count} items )
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>

      {/* Custom Next Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-1 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-[#EDA415] text-white p-3 rounded-full shadow-lg hover:bg-orange-500 transition"
      >
        <FaArrowRight size={18} />
      </button>
    </div>
  );
};

export default CategorySlider;
