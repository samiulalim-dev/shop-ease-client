import React from "react";
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import ForbiddenPage from "../../Pages/Forbidden/ForbiddenPage";

const SellerPrivateRoute = ({ children }) => {
  const { isRoleLoading, role } = useUserRole();
  if (isRoleLoading) {
    return <span>Loading please wait...</span>;
  }
  if (role !== "seller") {
    return <ForbiddenPage></ForbiddenPage>;
  }
  return children;
};

export default SellerPrivateRoute;
