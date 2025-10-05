import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SidebarSkeleton = () => {
  return (
    <span className=" flex flex-col space-y-2  my-2">
      <Skeleton
        baseColor="#2c2c54"
        highlightColor="#40407a"
        height={30}
      ></Skeleton>
      <Skeleton
        baseColor="#2c2c54"
        highlightColor="#40407a"
        height={30}
      ></Skeleton>
      <Skeleton
        baseColor="#2c2c54"
        highlightColor="#40407a"
        height={30}
      ></Skeleton>
      <Skeleton
        baseColor="#2c2c54"
        highlightColor="#40407a"
        height={30}
      ></Skeleton>
      <Skeleton
        baseColor="#2c2c54"
        highlightColor="#40407a"
        height={30}
      ></Skeleton>
      <Skeleton
        baseColor="#2c2c54"
        highlightColor="#40407a"
        height={30}
      ></Skeleton>
    </span>
  );
};

export default SidebarSkeleton;
