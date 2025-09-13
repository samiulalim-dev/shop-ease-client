import React from "react";
import aboutImg from "../../assets/about-us.jpg";
import { RiFocus2Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { SiVerizon } from "react-icons/si";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
      {/* Left Side - Image */}
      <div data-aos="fade-right">
        <img
          src={aboutImg}
          alt="About ShopExpo"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div data-aos="fade-left" className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-[#003F62]">
          About ShopEase
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          ShopEase is your trusted destination for quality products at
          affordable prices. We bring together top brands and ensure a seamless
          shopping experience for our customers.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Our mission is to deliver the best quality products with fast delivery
          and reliable customer support.
        </p>

        {/* Key Points */}
        <ul className="space-y-2 dark:text-white">
          <li className="flex items-center gap-2">
            <span>
              <SiVerizon />
            </span>{" "}
            Free & Fast Delivery
          </li>
          <li className="flex items-center gap-2">
            <span>
              <SiVerizon />
            </span>{" "}
            High Quality & Trusted Brands
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <span>
              <SiVerizon />
            </span>{" "}
            24/7 Customer Support
          </li>
        </ul>

        {/* Button */}
        <a
          href="https://en.wikipedia.org/wiki/E-commerce"
          target="_blank"
          className="mt-4 px-6 py-2 cursor-pointer bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition"
        >
          Learn More
        </a>
      </div>
      {/* mission */}
      <div
        data-aos="zoom-in"
        className="p-5 bg-white border border-gray-300 border-l-4 border-l-green-500 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
      >
        <h3 className="text-2xl flex items-center gap-2  font-bold dark:text-white text-[#003F62] mb-4">
          <span className="bg-gray-100 p-3 rounded-lg text-green-500 ">
            <RiFocus2Line size={28} />
          </span>{" "}
          Our Mission
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          At ShopEase, our mission is to make online shopping simple, enjoyable,
          and accessible to everyone. We aim to provide the best products with
          unbeatable quality and reliable delivery service.
        </p>
      </div>

      {/* Vision */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="p-5 bg-white border border-l-4 border-blue-900 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
      >
        <h3 className="text-2xl  flex items-center gap-2 font-bold dark:text-white text-[#003F62] mb-4">
          <span className="bg-gray-100 p-3 rounded-lg text-blue-900 ">
            <FaEye size={28} />
          </span>{" "}
          Our Vision
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Our vision is to become the most trusted e-commerce platform in the
          region, connecting people with their favorite brands and creating a
          shopping experience that inspires confidence and loyalty.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
