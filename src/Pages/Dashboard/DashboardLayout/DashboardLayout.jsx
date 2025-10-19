import React from "react";
import useUserRole from "../../../Hooks/useUserRole/useUserRole";
import MyOrders from "../UserDashboard/MyOrders/MyOrders";
import ReportAndAnalytics from "../AdminDashboard/ManageUser/ReportAndAlnalytics/ReportAndAnalytics";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SalesReport from "../SellerDashboard/SalesReport/SalesReport";

const DashboardLayout = () => {
  const { isRoleLoading, role } = useUserRole();
  if (isRoleLoading) {
    return (
      <SkeletonTheme baseColor="#e2e8f0" highlightColor="#f8fafc">
        <div className="p-6 space-y-6 animate-pulse">
          {/* Title */}
          <div>
            <Skeleton height={30} width={200} />
          </div>
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-6 border border-gray-300 rounded-lg shadow-sm"
              >
                <Skeleton height={20} width={`60%`} />
                <Skeleton height={15} width={`80%`} />
                <Skeleton height={15} width={`50%`} />
              </div>
            ))}
          </div>
          {/* Charts section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
              <Skeleton height={25} width={`40%`} className="mb-4" />
              <Skeleton height={200} width={`100%`} />
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
              <Skeleton height={25} width={`40%`} className="mb-4" />
              <Skeleton height={200} width={`100%`} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  if (role === "user") {
    return <MyOrders></MyOrders>;
  }
  if (role === "seller") {
    return <SalesReport></SalesReport>;
  }
  if (role === "admin") {
    return <ReportAndAnalytics></ReportAndAnalytics>;
  }
};

export default DashboardLayout;
