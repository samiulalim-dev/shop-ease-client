import React, { use } from "react";
import useUserRole from "../../Hooks/useUserRole/useUserRole";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ForbiddenPage from "../../Pages/Forbidden/ForbiddenPage";

const AdminPrivateRoute = ({ children }) => {
  const { role, isRoleLoading } = useUserRole();
  const { user, loading } = use(AuthContext);
  if (loading || isRoleLoading) {
    return (
      <>
        {" "}
        {/* className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#EDA415]" */}
        <div className="flex justify-center items-center min-h-screen">
          <div>Loading Please wait...</div>
        </div>
      </>
    );
  }
  if (role !== "admin") {
    return <ForbiddenPage></ForbiddenPage>;
  }
  return children;
};

export default AdminPrivateRoute;
