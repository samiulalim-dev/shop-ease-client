import Lottie from "lottie-react";
import React from "react";
import contactUsLottie from "../../assets/lottieFiles/contactUs.json";
const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:my-10 my-5">
      <div className="hero-content flex-col md:flex-row-reverse gap-20">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h2 className=" text-3xl  text-[#003F62]  text-center pt-3 font-semibold">
            Contact Support
          </h2>
          <div className="card-body">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-[#EDA415] hover:bg-orange-500 rounded text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="text-center hidden md:block md:max-w-lg lg:text-left">
          <Lottie animationData={contactUsLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Contact;
