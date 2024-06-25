import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Headers from "../components/header/Headers";
import FooterBig from "../components/footer/FooterBig";
import FooterSmall from "../components/footer/FooterSmall";

const ContentLoading = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Headers />
      <section className="bg-darkBg w-full h-auto pt-3 pb-3">
        <div className="flex justify-center items-center gap-3.5">
          <div className="w-[27.10%] h-80">
            <Skeleton className="h-80 rounded-xl" />
          </div>
          <div className="w-[45%] h-80">
            <Skeleton className="h-80 rounded-xl" />
          </div>
          <div className="w-[27.10%] h-80">
            <Skeleton className="h-80 rounded-xl" />
          </div>
        </div>
        <div className="flex place-items-center gap-[0.6rem] ml-6 mt-11">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="size-28 rounded-2xl" />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 ml-6 mt-8 pr-[7.5rem]">
          <div className="w-[49%] h-[21rem]">
            <Skeleton className="h-[21rem] rounded-xl" />
          </div>
          <div className="w-[49%] h-[21rem]">
            <Skeleton className="h-[21rem] rounded-xl" />
          </div>
        </div>
      </section>
      <FooterBig />
      <FooterSmall />
    </SkeletonTheme>
  );
};

export default ContentLoading;
