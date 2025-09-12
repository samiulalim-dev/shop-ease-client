import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Dummy Data
const categories = [
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

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0.5 cursor-pointer  top-1/2 -translate-y-1/2 bg-[#EDA415] text-white p-2 rounded-full shadow-md hover:bg-orange-500 z-10"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0.5  cursor-pointer  top-1/2 -translate-y-1/2 bg-[#EDA415] text-white p-2 rounded-full shadow-md hover:bg-orange-500 z-10"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Desktop 3 card
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 py-8 my-2 sm:my-14 relative">
      <Slider {...settings}>
        {categories.map((cat) => (
          <div key={cat.id} className="px-3">
            <div className="flex items-center gap-4 p-4 bg-white border border-gray-400 rounded-2xl shadow hover:shadow-md transition">
              {/* Left: Image */}
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 object-contain"
              />

              <div className="divider divider-horizontal divider-start"></div>
              {/* Right: Info */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500">{cat.items} items</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CategorySlider;
