import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeleton3 = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-full flex justify-center items-center gap-2">
        <div className="w-[22%] h-[22rem]">
          <Skeleton className="h-[22rem] rounded-lg" />
        </div>
        <div className="w-[22%] h-[22rem]">
          <Skeleton className="h-[22rem] rounded-lg" />
        </div>
        <div className="w-[22%] h-[22rem]">
          <Skeleton className="h-[22rem] rounded-lg" />
        </div>
        <div className="w-[22%] h-[22rem]">
          <Skeleton className="h-[22rem] rounded-lg" />
        </div>
        <div className="w-[12%] h-[22rem]">
          <Skeleton className="h-[22rem] rounded-lg" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Skeleton3;
