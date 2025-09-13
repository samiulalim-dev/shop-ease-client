import React from "react";

const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-11/12 sm:w-96 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Support
        </h2>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full dark:bg-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer bg-[#EDA415] hover:bg-orange-500 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
