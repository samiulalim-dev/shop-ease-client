import React, { use } from "react";
import Loading from "../Shared/LoadingSpinner/LoadingSpinner";
import { Navigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
