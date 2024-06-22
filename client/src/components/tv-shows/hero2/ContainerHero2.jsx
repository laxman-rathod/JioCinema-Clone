import React from "react";
import HeadLine from "./HeadLine";
import Movies from "./Movies";
import { useSelector } from "react-redux";

const ContainerHero2 = () => {
  const res = useSelector((store) => store.movieSuggestions);

  return (
    <>
      {res.isGenrelContents && (
        <div className="pl-6 mt-8">
          <HeadLine />
          <Movies />
        </div>
      )}
    </>
  );
};

export default ContainerHero2;
