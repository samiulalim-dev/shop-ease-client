import React from "react";
import Skeleton from "react-loading-skeleton";

const MyProductSkeleton = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
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

export default MyProductSkeleton;
