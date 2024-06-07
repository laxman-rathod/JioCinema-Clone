import React from "react";

const TheSpotlight = () => {
  return (
    <div className="flex items-center justify-start gap-3">
      <img
        src="/assets/the_loard_of_the_rings_image.jpg"
        alt="movies_name"
        className="w-full h-[22rem] object-cover rounded-lg cursor-pointer"
      />
      <img
        src="/assets/openhaimer_movie_image_full.jpg"
        alt="movies_name"
        className="w-full h-[22rem] object-cover rounded-lg cursor-pointer"
      />
    </div>
  );
};

export default TheSpotlight;
