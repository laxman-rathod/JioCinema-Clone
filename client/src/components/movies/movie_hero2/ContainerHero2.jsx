import React from "react";
import HeadLine from "./HeadLine";
import Poster from "./Poster";
import { useSelector } from "react-redux";

const ContainerHero2 = () => {
  const res = useSelector((store) => store.movieSuggestions);
  return (
    <>
      {res.isGenrelContents && (
        <div className="pl-6 mt-8">
          <HeadLine />
          <Poster />
        </div>
      )}
    </>
  );
};

export default ContainerHero2;
