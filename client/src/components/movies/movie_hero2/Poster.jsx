import React from "react";

const Poster = () => {
  return (
    <div className="pr-6 cursor-pointer">
      <img
        src="/assets/openheimer.png"
        alt="movie poster"
        className="rounded-lg w-full h-72 object-cover brightness-95 hover:brightness-110 custome-transition"
      />
    </div>
  );
};

export default Poster;
