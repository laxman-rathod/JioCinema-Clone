import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeleton2 = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-full flex justify-center items-center gap-3">
        <div className="w-[49%] h-[21rem]">
          <Skeleton className="h-[21rem] rounded-xl" />
        </div>
        <div className="w-[49%] h-[21rem]">
          <Skeleton className="h-[21rem] rounded-xl" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Skeleton2;
