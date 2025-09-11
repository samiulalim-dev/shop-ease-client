import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider2 from "../../assets/slider2.jpg";
import slider1 from "../../assets/slider1.jpg";
import slider3 from "../../assets/slider3.jpg";

const Banner = () => {
  const slides = [
    {
      id: 2,
      img: slider2,
      title: "New Arrivals",
      desc: "Check out the latest trends for you and your family.",
      btn: "Explore",
    },
    {
      id: 1,
      img: slider1,
      title: "",
      desc: "",
      btn: "Shop Now",
    },

    {
      id: 3,
      img: slider3,
      title: "Exclusive Deals",
      desc: "Don’t miss out on limited-time offers.",
      btn: "Grab Now",
    },
  ];

  return (
    <div className="w-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={4000}
        transitionTime={800}
        swipeable={false}
        emulateTouch={false}
        stopOnHover={false}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Banner Image */}
            <img
              src={slide.img}
              loading="lazy"
              decoding="async"
              className="h-[190px]  md:h-[394px] w-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start text-end text-white px-4 sm:px-10">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl">
                {slide.desc}
              </p>
              <button className="px-5 cursor-pointer py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition">
                {slide.btn}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
