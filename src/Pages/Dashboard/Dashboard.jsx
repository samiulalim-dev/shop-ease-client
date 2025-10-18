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
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SidebarSkeleton from "./SidebarSkeleton/SidebarSkeleton";
import SubNavbar from "../../Components/Navbar/SubNavbar";
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role, isRoleLoading } = useUserRole();
  // console.log(role);
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
          <span className="font-medium">Back to Home</span>
        </NavLink>
      </li>
      {isRoleLoading && <SidebarSkeleton></SidebarSkeleton>}
      {/* user role */}
      {!isRoleLoading && role === "user" && (
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
      {/* seller role */}
      {!isRoleLoading && role === "seller" && (
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
              <span className="font-medium">Review & Rating</span>
            </NavLink>
          </li>
        </>
      )}
      {/* admin role */}
      {!isRoleLoading && role === "admin" && (
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
              to="/dashboard/manage-user"
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
              to="/manage-sellers"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaStore className="w-4 h-4" />
              <span className="font-medium">Manage Sellers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/active-Sellers"
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-3 rounded-lg transition-all duration-200 hover:bg-[#EDA415]/10 ${
                  isActive
                    ? "bg-[#EDA415] text-white shadow-lg transform scale-105"
                    : "text-white hover:text-[#EDA415]"
                }`
              }
            >
              <FaStore className="w-4 h-4" />
              <span className="font-medium">Active Vendors</span>
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
        <div>
          <SubNavbar></SubNavbar>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="flex  max-w-screen-xl mx-auto">
          {/* Desktop Sidebar */}
          <aside className="hidden my-7 rounded-2xl lg:flex flex-col w-64  bg-gradient-to-b from-[#04073d] to-[#003F62]  shadow-md sticky top-10 h-[calc(100vh-3.5rem)]">
            <ul className=" p-2 font-normal text-sm mt-5  overflow-y-auto h-full text-white">
              <DashboardUserProfile></DashboardUserProfile>
              {dashboardSideNavbar}
            </ul>
          </aside>
          {/* Sidebar Mobile */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-[#04073d] to-[#003F62] text-white  lg:hidden overflow-y-auto p-4"
              >
                <div className="flex justify-end items-center mb-2">
                  <button onClick={() => setSidebarOpen(false)}>
                    <FaTimes size={22} />
                  </button>
                </div>
                <DashboardUserProfile />
                <ul className="space-y-1 mt-4">{dashboardSideNavbar}</ul>
              </motion.aside>
            </>
          )}

          {/* Main Content */}
          <main className="flex-1 lg:my-7 lg:ml-5 lg:m-0 m-3 sm:m-4  md:p-6 rounded-2xl sm:p-3 p-2 overflow-y-auto h-[calc(100vh-3.5rem)] bg-gray-50 dark:bg-black/87">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
