import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/latest/product");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 my-8 md:my-16">
        <h2 className="text-3xl font-bold text-[#003F62] dark:text-white text-center mb-6">
          New Arrivals
        </h2>
        <p className="text-center dark:text-gray-300">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-6 my-8 md:my-16 overflow-hidden">
      <h2
        className="pb-8 dark:text-white text-[#003F62] text-3xl font-bold text-center"
        data-aos="fade-up"
      >
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* LEFT BIG CARD */}
        {products[0] && (
          <div
            className="relative col-span-1 sm:col-span-1 sm:row-span-2"
            data-aos="fade-right"
          >
            <img
              src={products[0]?.images}
              alt={products[0].name}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-center items-start p-6 text-white">
              <h3 className="text-2xl font-bold">{products[0].productName}</h3>
              <p className="text-lg text-[#EDA415] font-semibold mb-3">
                ${products[0].price}
              </p>
              <Link
                to="/products"
                className="px-4 cursor-pointer py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg font-semibold"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}

        {/* RIGHT SIDE CARDS */}
        {products.slice(1).map((p, i) => (
          <div
            key={p._id || i}
            className="relative"
            data-aos={i === 0 ? "fade-left" : "zoom-in"}
          >
            <img
              src={Array.isArray(p.images) ? p.images[0] : p.images}
              alt={p.productName}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg flex flex-col justify-center items-start p-3 text-white">
              <h3 className="text-lg font-bold">{p.productName}</h3>
              <p className="text-lg text-[#EDA415]  font-semibold">
                ${p.price}
              </p>
              <Link
                to="/products"
                className="underline  text-white mt-1 font-semibold hover:text-[#EDA415]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
