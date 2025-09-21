import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaShoppingCart,
  FaCreditCard,
  FaStar,
  FaTruck,
  FaUser,
  FaTimes,
  FaPlusCircle,
  FaBoxOpen,
  FaMoneyBillWave,
  FaChartBar,
  FaUsers,
  FaStore,
  FaClipboardList,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import StartNavbar from "../../Components/Navbar/StartNavbar";
import DashboardStartNavbar from "./DashboardStartNavbar/DashboardStartNavbar";
import DashboardUserProfile from "./DashboardUserProfile/DashboardUserProfile";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const role = "admin";
  const dashboardSideNavbar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
              isActive
                ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                : "text-white hover:text-[#EDA415]"
            }`
          }
        >
          <FaHome className="w-4 h-4" />
          <span className="font-medium">Home</span>
        </NavLink>
      </li>
      {/* user role */}
      {role === "user" && (
        <>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaShoppingBag className="w-4 h-4" />
              <span className="font-medium">My Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaHeart className="w-4 h-4" />
              <span className="font-medium">My Wishlist</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaShoppingCart className="w-4 h-4" />
              <span className="font-medium">Cart</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/payment-history"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaCreditCard className="w-4 h-4" />
              <span className="font-medium">Payment History</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaStar className="w-4 h-4" />
              <span className="font-medium">Review and Rating</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/track-order"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-gap-4 px-8 hover:text-[#EDA415]"
                }`
              }
            >
              <FaTruck className="w-4 h-4" />
              <span className="font-medium">Track Order</span>
            </NavLink>
          </li>
        </>
      )}
      {/* vendor role */}
      {role === "vendor" && (
        <>
          <li>
            <NavLink
              to="/sales-report"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaShoppingBag className="w-4 h-4" />
              <span className="font-medium">Sales Report</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaPlusCircle className="w-4 h-4" />
              <span className="font-medium">Add Product</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-products"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaBoxOpen className="w-4 h-4" />
              <span className="font-medium">My Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/earnings"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaMoneyBillWave className="w-4 h-4" />
              <span className="font-medium">Earnings</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaTruck className="w-4 h-4" />
              <span className="font-medium">Delivery Status</span>
            </NavLink>
          </li>
        </>
      )}
      {role === "admin" && (
        <>
          <li>
            <NavLink
              to="/report-analytics"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaChartBar className="w-4 h-4" />
              <span className="font-medium">Report & Analytics</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manage-user"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaUsers className="w-4 h-4" />
              <span className="font-medium">Manage User</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manage-vendor"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaStore className="w-4 h-4" />
              <span className="font-medium">Manage Vendors</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manage-products"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaBoxOpen className="w-4 h-4" />
              <span className="font-medium">Manage Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/manage-orders"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaClipboardList className="w-4 h-4" />
              <span className="font-medium">Manage Orders</span>
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
              isActive
                ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                : "text-white hover:text-[#EDA415]"
            }`
          }
        >
          <FaUser className="w-4 h-4" />
          <span className="font-medium">My Profile</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <div className="sticky top-0 z-50">
        <DashboardStartNavbar
          setSidebarOpen={setSidebarOpen}
        ></DashboardStartNavbar>
      </div>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden  lg:flex flex-col w-64  bg-gradient-to-b from-[#04073d] to-[#003F62]  shadow-md">
          <ul className=" menu mt-5 shadow-lg min-h-screen text-white">
            <DashboardUserProfile></DashboardUserProfile>
            {dashboardSideNavbar}
          </ul>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div>
            <div
              className="fixed inset-0 bg-black/20 bg-opacity-40"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-b from-[#04073d] to-[#003F62]  shadow-md w-60 sm:w-64 h-full"
            >
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes size={20} />
              </button>

              <ul className=" menu shadow-lg min-h-screen text-white">
                <DashboardUserProfile></DashboardUserProfile>
                {dashboardSideNavbar}
              </ul>
            </motion.aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto dark:bg-black/87 bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
