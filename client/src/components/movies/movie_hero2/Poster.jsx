import React from "react";

const Poster = () => {
  return (
    <div className="pr-6 cursor-pointer">
      <img
        src="/assets/openheimer.png"
        alt="movie poster"
        className="rounded-lg w-full h-72 object-cover"
      />
    </div>
  );
};

export default Poster;
