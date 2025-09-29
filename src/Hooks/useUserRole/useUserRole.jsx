import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
import axios from "axios";

const useUserRole = () => {
  const { user, loading } = use(AuthContext);
  const [role, setRole] = useState();

  const [isRoleLoading, setIsRoleLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (!loading && user?.email) {
      axiosSecure
        .get(`/user/${user?.email}`)
        .then((res) => {
          setRole(res.data.role);
          setIsRoleLoading(false);
        })
        .catch(() => {
          console.log("failed to fetch user role", role);
          setIsRoleLoading(false);
        });
    }
  }, [user]);

  return {
    role,
    isRoleLoading,
  };
};

export default useUserRole;
