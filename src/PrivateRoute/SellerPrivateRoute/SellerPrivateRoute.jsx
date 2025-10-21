import React from "react";
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import ForbiddenPage from "../../Pages/Forbidden/ForbiddenPage";
import { useLocation } from "react-router";
import AddProductSkeleton from "../../Pages/Dashboard/SellerDashboard/SellerSkeleton/AddProductSkeleton/AddProductSkeleton";

const SellerPrivateRoute = ({ children }) => {
  const { isRoleLoading, role } = useUserRole();
  const location = useLocation();
  // console.log(location.pathname);
  if (isRoleLoading) {
    if (location.pathname === "/dashboard/add-product") {
      return <AddProductSkeleton></AddProductSkeleton>;
    } else {
      return <span>Please Wait...</span>;
    }
  }
  if (role !== "seller") {
    return <ForbiddenPage></ForbiddenPage>;
  }
  return children;
};

export default SellerPrivateRoute;
