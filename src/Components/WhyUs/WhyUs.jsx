import React from "react";
import { FaShippingFast, FaStar, FaShieldAlt, FaUndo } from "react-icons/fa";

const WhyUs = () => {
  const items = [
    {
      id: 1,
      icon: <FaShippingFast className="text-3xl text-[#EDA415]" />,
      title: "Free Delivery",
      animation: "fade-up",
      desc: "Get your order delivered at no extra cost",
    },
    {
      id: 2,
      icon: <FaStar className="text-3xl text-[#EDA415]" />,
      title: "Best Quality",
      animation: "fade-up",
      desc: "We provide top quality products only",
    },
    {
      id: 3,
      icon: <FaShieldAlt className="text-3xl text-[#EDA415]" />,
      title: "1 Year Warranty",
      animation: "fade-up",
      desc: "Enjoy peace of mind with every purchase",
    },
    {
      id: 4,
      icon: <FaUndo className="text-3xl text-[#EDA415]" />,
      title: "Easy Returns",
      animation: "fade-up",
      desc: "30 Days hassle-free product returns",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4   my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-200 rounded-2xl  overflow-hidden">
        {items.map((item) => (
          <div
            key={item.id}
            data-aos={item.animation}
            className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {item.icon}
            <h3 className="mt-4 text-lg font-semibold text-[#003F62]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
