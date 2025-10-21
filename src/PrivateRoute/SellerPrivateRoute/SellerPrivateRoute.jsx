import React from "react";
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import ForbiddenPage from "../../Pages/Forbidden/ForbiddenPage";
import { useLocation } from "react-router";
import AddProductSkeleton from "../../Pages/Dashboard/SellerDashboard/SellerSkeleton/AddProductSkeleton/AddProductSkeleton";
import MyProductSkeleton from "../../Pages/Dashboard/SellerDashboard/SellerSkeleton/MyProductSekelton/MyProductSkeleton";

const SellerPrivateRoute = ({ children }) => {
  const { isRoleLoading, role } = useUserRole();
  const location = useLocation();
  // console.log(location.pathname);
  if (isRoleLoading) {
    switch (location.pathname) {
      case "/dashboard/add-product":
        return <AddProductSkeleton />;
      case "/dashboard/my-products":
        return <MyProductSkeleton />;
      default:
        return <span>Loading Please Wait...</span>;
    }
  }
  if (role !== "seller") {
    return <ForbiddenPage></ForbiddenPage>;
  }
  return children;
};

export default SellerPrivateRoute;
