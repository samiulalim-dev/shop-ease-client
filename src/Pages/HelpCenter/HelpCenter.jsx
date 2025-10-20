import React, { useState } from "react";
import ContactModal from "./ContactModal";
import {
  FaSearch,
  FaQuestionCircle,
  FaUndoAlt,
  FaMoneyCheckAlt,
  FaHeadset,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const HelpCenter = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const faqs = [
    {
      id: 1,
      icon: (
        <MdLocalShipping className="text-[#003F62]  dark:text-[#EDA415]  text-3xl" />
      ),
      question: "How can I track my order?",
      answer:
        "At first log in to your account. Then go to dashboard and click on 'Track Order'. You’ll see the latest status.",
    },
    {
      id: 2,
      icon: (
        <FaUndoAlt className="text-[#003F62]  dark:text-[#EDA415]  text-3xl" />
      ),
      question: "What is your return policy?",
      answer:
        "You can return any product within 30 days of delivery. Ensure the item is unused and in original packaging.",
    },
    {
      id: 3,
      icon: (
        <FaMoneyCheckAlt className="text-[#003F62] dark:text-[#EDA415] text-3xl" />
      ),
      question: "What payment methods are accepted?",
      answer:
        "We accept Credit/Debit Cards, Mobile Banking (Bkash, Nagad), Cash on Delivery, and Net Banking.",
    },
    {
      id: 4,
      icon: (
        <FaHeadset className="text-[#003F62] text-3xl  dark:text-[#EDA415] " />
      ),
      question: "How can I contact customer support?",
      answer:
        "You can reach us via Live Chat, email at support@shopexpo.com, or call +880-1234-000000.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-[#003F62] mb-3 flex justify-center items-center gap-2">
          <span className="hidden lg:block">
            {" "}
            <FaQuestionCircle className="text-[#EDA415]" />
          </span>
          Welcome to the ShopExpo Help Center
        </h1>
        <p className="dark:text-white text-gray-600">
          Find answers to your questions or get in touch with our support team.
        </p>
      </div>

      {/* Search Box */}
      <div
        className="max-w-lg mx-auto mb-10 flex items-center border border-black dark:border-white rounded-lg shadow-sm"
        data-aos="zoom-in"
      >
        <input
          type="text"
          placeholder="Search your query..."
          className="flex-1 text-black dark:text-white px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button className="px-4 py-2 bg-[#EDA415] cursor-pointer text-white rounded-r-lg hover:bg-orange-500 transition flex items-center gap-1">
          <FaSearch /> Search
        </button>
      </div>

      {/* FAQs Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="flex items-start gap-4 p-5 rounded-lg shadow-sm hover:shadow-lg transition duration-300 ease-in-out dark:bg-black/80 bg-blue-100 border border-gray-200 dark:border-gray-700"
            data-aos="fade-up"
          >
            {/* Icon section */}
            <div className="flex-shrink-0 mt-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#003F62]/10 dark:bg-white/10">
                {faq.icon}
              </div>
            </div>

            {/* Text section */}
            <div>
              <h3 className="text-lg font-semibold text-[#003F62] dark:text-white mb-1">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="text-center flex flex-col items-center justify-center mt-12">
        <h2 className="text-2xl font-bold dark:text-white text-[#003F62] mb-2 flex justify-center items-center gap-2">
          <FaHeadset className="text-[#EDA415]" />
          Still need help?
        </h2>
        <p className="dark:text-white text-gray-600 mb-2">
          Our support team is here to assist you 24/7.
        </p>
        <button
          onClick={() => setShowContactModal(true)}
          className="px-6 py-3 cursor-pointer bg-[#EDA415] text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition flex items-center justify-center gap-2"
        >
          <FaHeadset /> Contact Support
        </button>
      </div>

      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
};

export default HelpCenter;
