import React from "react";

const Movies = () => {
  return (
    <div className="pr-6 cursor-pointer">
      <img
        src="/assets/openheimer.png"
        alt="movie poster"
        className="rounded-lg w-full h-72 object-cover"
      />
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.07] transition-opacity duration-300 rounded-lg"></div>
    </div>
  );
};

export default Movies;
