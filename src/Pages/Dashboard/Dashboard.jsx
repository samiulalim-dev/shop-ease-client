import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaTimes } from "react-icons/fa";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import StartNavbar from "../../Components/Navbar/StartNavbar";
import DashboardStartNavbar from "./DashboardStartNavbar/DashboardStartNavbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", icon: <FaHome />, path: "/dashboard" },
    { id: 2, name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
    { id: 3, name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <div>
        <DashboardStartNavbar
          setSidebarOpen={setSidebarOpen}
        ></DashboardStartNavbar>
      </div>

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r shadow-md">
          <div className="p-6 font-bold text-xl text-[#003F62]">Dashboard</div>
          <nav className="flex-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-[#EDA415]/20 hover:text-[#003F62] transition"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/20 bg-opacity-40"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="relative bg-white w-58 sm:w-64 h-full shadow-md p-6"
            >
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes size={20} />
              </button>

              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.path}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#EDA415]/20 hover:text-[#003F62] transition rounded-lg"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.icon} {link.name}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-50">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
