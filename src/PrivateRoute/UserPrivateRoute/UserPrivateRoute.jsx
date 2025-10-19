import React from "react";
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import ForbiddenPage from "../../Pages/Forbidden/ForbiddenPage";

const UserPrivateRoute = ({ children }) => {
  const { role, isRoleLoading } = useUserRole();

  if (!isRoleLoading && role !== "user") {
    return <ForbiddenPage></ForbiddenPage>;
  }
  return children;
};

export default UserPrivateRoute;
