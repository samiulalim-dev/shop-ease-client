import React from "react";
import Marquee from "react-fast-marquee";
import samsung from "../../assets/brand-partners/samsung.png";
import apple from "../../assets/brand-partners/apple.png";
import zara from "../../assets/brand-partners/zara.jpg";
import aarong from "../../assets/brand-partners/aarong.png";
import hm from "../../assets/brand-partners/H&M.png";
import nike from "../../assets/brand-partners/nike.png";

const BrandsShowcase = () => {
  const brands = [
    { id: 1, img: samsung },
    { id: 2, img: apple },
    { id: 3, img: zara },
    { id: 4, img: aarong },
    { id: 5, img: hm },
    { id: 6, img: nike },
  ];

  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003F62] mb-2">
          Trusted by Top Brands
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          ShopExpo is proudly partnered with industry-leading brands
        </p>

        {/* Brands Marquee */}
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          <div className="flex items-center">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex justify-center items-center mx-3 sm:mx-6 md:mx-10 lg:mx-16 
                           p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={brand.img}
                  alt={`Brand ${brand.id}`}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-20 object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsShowcase;
