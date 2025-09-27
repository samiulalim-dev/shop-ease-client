import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { use, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import user_avatar from "../../../../assets/user-avatar.png";
import useAxios from "../../../../Hooks/useAxios/useAxios";

const ManageUser = () => {
  const axiosInstance = useAxios();
  const [search, setSearch] = useState("");
  console.log(search);
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get("/all-user");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-6">
        {/* Skeleton Loader for Table */}
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Role</th>
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
    );
  }

  return (
    <div className="md:p-6 sm:p-3 p-1">
      <div className="flex  mb-10 justify-between">
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
            placeholder="Search"
          />
        </label>
      </div>

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
            {users.map((user, index) => (
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

                  {user.role === "vendor" && (
                    <span className="px-2 py-1 rounded-full bg-blue-500 text-white font-semibold text-sm">
                      Vendor
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
                      <button className="btn btn-xs bg-green-500 text-white hover:bg-green-600 transition">
                        Make Admin
                      </button>
                    )}

                    {user.role !== "vendor" && (
                      <button className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600 transition">
                        Make Vendor
                      </button>
                    )}

                    {user.role !== "user" && (
                      <button className="btn btn-xs bg-yellow-400 text-white hover:bg-yellow-500 transition">
                        Make User
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
    </div>
  );
};

export default ManageUser;
