import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../Shared/Logo/Logo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9">
        {/* Brand */}
        <div>
          <div className=" flex justify-items-start">
            <Logo></Logo>
          </div>
          <p className="mt-4 text-sm">
            Discover premium products at unbeatable prices. Shop with confidence
            only on ShopEase.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#EDA415]">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#EDA415]">
                Products
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="hover:text-[#EDA415]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contacts" className="hover:text-[#EDA415]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Customer Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/help-center" className="hover:text-[#EDA415]">
                Help Center
              </Link>
            </li>
            <li>call: +880-1234-000000.</li>

            <li>email: support@shopexpo.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#EDA415] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#EDA415] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#EDA415] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#EDA415] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
