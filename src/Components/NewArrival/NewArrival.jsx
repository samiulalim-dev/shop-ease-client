import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const NewArrival = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone Pro",
      price: "$999",
      img: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: "$1499",
      img: "https://picsum.photos/400/600?random=2",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$199",
      img: "https://picsum.photos/300/300?random=3",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: "$299",
      img: "https://picsum.photos/300/300?random=4",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-6 sm:py-12 overflow-hidden">
      <h2
        className="pb-8 dark:text-white text-[#003F62] text-3xl font-bold text-center"
        data-aos="fade-up"
      >
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {/* LEFT BIG CARD */}
        <div
          className="relative col-span-2 sm:col-span-1 sm:row-span-2  "
          data-aos="fade-right"
        >
          <img
            src={products[0].img}
            alt={products[0].name}
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-center items-start p-6 text-white">
            <h3 className="text-2xl font-bold">{products[0].name}</h3>
            <p className="text-lg mb-3">{products[0].price}</p>
            <button className="px-4 py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        {/* RIGHT TOP LONG CARD */}
        <div className="relative col-span-2 " data-aos="fade-left">
          <img
            src={products[1].img}
            alt={products[1].name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-center items-start p-4 text-white">
            <h3 className="text-xl font-bold">{products[1].name}</h3>
            <p className="text-md mb-2">{products[1].price}</p>
            <button className="px-3 py-1 bg-[#EDA415] hover:bg-orange-500 rounded-lg text-sm font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        {/* RIGHT BOTTOM - TWO SMALL CARDS */}

        <div className="relative " data-aos="zoom-in">
          <img
            src={products[2].img}
            alt={products[2].name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg flex flex-col justify-center items-start p-3 text-white">
            <h3 className="text-lg font-bold">{products[2].name}</h3>
            <p className="text-sm">{products[2].price}</p>
          </div>
        </div>

        <div className="relative " data-aos="zoom-in">
          <img
            src={products[3].img}
            alt={products[3].name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/30 rounded-lg flex flex-col justify-center items-start p-3 text-white">
            <h3 className="text-lg font-bold">{products[3].name}</h3>
            <p className="text-sm">{products[3].price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
