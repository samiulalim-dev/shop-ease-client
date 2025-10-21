import React from "react";
import Skeleton from "react-loading-skeleton";

const ManageUserSkeleton = () => {
  return (
    <div>
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
  );
};

export default ManageUserSkeleton;
