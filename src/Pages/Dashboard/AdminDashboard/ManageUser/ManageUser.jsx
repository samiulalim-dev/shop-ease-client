import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { use, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import user_avatar from "../../../../assets/user-avatar.png";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useUserRole from "../../../../Hooks/useUserRole/useUserRole";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loadingUserId, setLoadingUserId] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user, signOutUser } = use(AuthContext);
  // console.log(user);
  // console.log(search);
  const { data, isLoading } = useQuery({
    queryKey: ["Users", search, page],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/all-user?search=${search}&page=${page}&limit=${limit}`
      );
      return res.data;
    },
  });

  const { mutate: updateUserRole, isPending } = useMutation({
    mutationFn: async ({ userId, userRole, userEmail }) => {
      setLoadingUserId(userId);
      const res = await axiosSecure.patch(`/user/role/${userId}`, {
        role: userRole,
      });
      return res.data;
    },
    onSuccess: async (data, variables) => {
      setLoadingUserId(null);
      // console.log(variables);
      // Role successfully updated
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: `Role updated to ${variables.userRole}`,
          timer: 1500,
          showConfirmButton: false,
        });

        queryClient.invalidateQueries(["Users"]);

        // যদি logged-in user নিজের role change করে non-admin করে
        if (
          user.email === variables.userEmail &&
          variables.userRole !== "admin"
        ) {
          Swal.fire({
            icon: "warning",
            title: "You changed your role!",
            text: "You will be signed out.",
            timer: 2500,
            showConfirmButton: false,
          }).then(() => {
            signOutUser()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }
      }
    },
    onError: (error) => {
      setLoadingUserId(null);
      Swal.fire({
        icon: "error",
        title: "Failed to update role",
        text: error.message,
      });
    },
  });

  return (
    <div className="md:p-6 sm:p-3 p-1">
      <div className="flex  mb-10 flex-col gap-4 sm:flex-row items-center sm:justify-between">
        <h2 className="text-2xl text-[#003F62] dark:text-white font-bold">
          Manage Users
        </h2>
        <label className="input  focus-within:outline-[#003F62]  rounded-xl text-black ">
          <svg
            className="h-[1em] opacity-50 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            value={search}
            placeholder="Search"
          />
        </label>
      </div>
      {isLoading ? (
        <div className="">
          {/* Skeleton Loader for Table */}

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gray-200">
                <tr className="dark:text-white text-[#003F62]">
                  <th>NO</th>
                  <th>Name</th>
                  <th>Created Date</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton width={20} />
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Skeleton circle width={30} height={30} />
                        <Skeleton width={100} />
                      </div>
                    </td>
                    <td>
                      <Skeleton width={180} />
                    </td>
                    <td>
                      <Skeleton width={80} height={24} borderRadius={12} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table dark:text-white">
              {/* head */}
              <thead>
                <tr className="dark:text-white text-[#003F62]">
                  <th>NO</th>
                  <th>Name</th>
                  <th>Created Date</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data?.allUsers?.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={user?.photo ? user?.photo : user_avatar}
                              alt="User Avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm opacity-50">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="capitalize">
                      {user.role === "admin" && (
                        <span className="px-2 py-1 rounded-full bg-red-500 text-white font-semibold text-sm">
                          Admin
                        </span>
                      )}

                      {user.role === "seller" && (
                        <span className="px-2 py-1 rounded-full bg-blue-500 text-white font-semibold text-sm">
                          Seller
                        </span>
                      )}

                      {user.role === "user" && (
                        <span className="px-2 py-1 rounded-full bg-green-500 text-white font-semibold text-sm">
                          User
                        </span>
                      )}
                    </td>
                    <th>
                      <div className="flex flex-wrap gap-2">
                        {user.role !== "admin" && (
                          <button
                            onClick={() =>
                              updateUserRole({
                                userId: user._id,
                                userRole: "admin",
                                userEmail: user.email,
                              })
                            }
                            disabled={loadingUserId === user._id}
                            className="btn btn-xs bg-green-500 text-white hover:bg-green-600 transition"
                          >
                            {loadingUserId === user._id
                              ? "Updating..."
                              : "Make Admin"}
                          </button>
                        )}

                        {/* {user.role !== "seller" && (
                          <button
                            onClick={() =>
                              updateUserRole({
                                userId: user._id,
                                userRole: "seller",
                              })
                            }
                            disabled={isPending}
                            className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600 transition"
                          >
                            {isPending ? "Updating..." : "Make Vendor"}
                          </button>
                        )} */}

                        {user.role !== "user" && (
                          <button
                            onClick={() =>
                              updateUserRole({
                                userId: user._id,
                                userRole: "user",
                                userEmail: user.email,
                              })
                            }
                            disabled={loadingUserId === user._id}
                            className="btn btn-xs bg-yellow-400 text-white hover:bg-yellow-500 transition"
                          >
                            {loadingUserId === user._id
                              ? "Updating..."
                              : "Make User"}
                          </button>
                        )}
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
          <div className="flex  justify-around items-center mt-4 md:mt-10 sm:mt-6">
            <button
              className="btn btn-sm bg-[#EDA415] text-white font-semibold shadow-md transition rounded-lg hover:bg-orange-500"
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>

            <span>
              Page {data?.currentPage} of {data?.totalPages}
            </span>

            <button
              className="btn btn-sm bg-[#EDA415] text-white font-semibold shadow-md transition rounded-lg hover:bg-orange-500"
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, data?.totalPages))
              }
              disabled={page === data?.totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUser;
