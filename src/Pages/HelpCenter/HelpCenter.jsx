import React from "react";

const HelpCenter = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I track my order?",
      answer:
        " At first log in to your account. then go to dashboard and click on 'Track Order'. You’ll see the latest status.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "You can return any product within 30 days of delivery. Ensure the item is unused and in original packaging.",
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer:
        "We accept Credit/Debit Cards, Mobile Banking (Bkash, Nagad), Cash on Delivery, and Net Banking.",
    },
    {
      id: 4,
      question: "How can I contact customer support?",
      answer:
        "You can reach us via Live Chat, email at support@shopexpo.com, or call +880-1234-000000.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-[#003F62] mb-3">
          Welcome to the ShopExpo Help Center
        </h1>
        <p className="dark:text-white text-gray-600">
          Find answers to your questions or get in touch with our support team.
        </p>
      </div>

      <div
        className="max-w-lg mx-auto mb-10 flex items-center border border-black dark:border-white  rounded-lg shadow-sm"
        data-aos="zoom-in"
      >
        <input
          type="text"
          placeholder="Search your query..."
          className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button className="px-4 py-2 bg-[#EDA415] cursor-pointer text-white rounded-r-lg hover:bg-orange-500 transition">
          Search
        </button>
      </div>

      {/* FAQs Section */}
      <div className="grid gap-6  md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="p-5  rounded-lg shadow-sm hover:shadow-lg transition  duration-300 ease-in-out bg-blue-200"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold text-[#003F62] mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="text-center mt-12" data-aos="fade-up">
        <h2 className="text-2xl font-bold dark:text-white text-[#003F62] mb-3">
          Still need help?
        </h2>
        <p className="dark:text-white text-gray-600 mb-5">
          Our support team is here to assist you 24/7.
        </p>
        <button className="px-6 py-3 cursor-pointer bg-[#EDA415] text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
