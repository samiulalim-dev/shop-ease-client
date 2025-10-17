import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CategorySlider = () => {
  const swiperRef = useRef(null);

  const items = [
    {
      id: 1,
      name: "Electronics",
      items: 120,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyHDp3pcSY53jV1UBNopEMLB-XEFtN7mojQ&s",
    },
    {
      id: 2,
      name: "Clothing",
      items: 250,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0PJTSS___Xt_lf0HbLczTxSmhVGH3GqnAA&s",
    },
    {
      id: 3,
      name: "Shoes",
      items: 95,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4jB31RljtggpoP69sSnPHwoSIvfDLqg5MA&s",
    },
    {
      id: 4,
      name: "Accessories",
      items: 150,
      img: "https://www.shutterstock.com/image-photo/make-products-pink-background-top-600nw-2197448551.jpg",
    },
    {
      id: 5,
      name: "Home & Living",
      items: 75,
      img: "https://img.freepik.com/free-photo/full-shot-women-watching-movie-laptop_23-2149266789.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

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
        {/* bg-blue-500 text-white rounded-lg p-6 shadow-md text-center */}
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="px-3">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-400 rounded-2xl shadow hover:shadow-md transition">
                {/* Left: Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />

                <div className="divider divider-horizontal divider-start"></div>
                {/* Right: Info */}
                <div>
                  <h3 className="font-semibold text-lg text-[#003F62]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#003F62]">
                    ( {item.items} items )
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
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
