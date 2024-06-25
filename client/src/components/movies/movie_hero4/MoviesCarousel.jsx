import React from "react";
import "../../component_styles/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MoviesCarousel = () => {
  const images = [
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
    {
      img: "/assets/openheimer.png",
    },
  ];

  return (
    <div className="w-full h-[17rem] cursor-pointer">
      <Swiper
        slidesPerView={6.5}
        spaceBetween={10}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, ind) => (
          <SwiperSlide key={ind}>
            <img src={image.img} alt={`slide-${ind}`} className="rounded-lg" />
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.10] transition-opacity duration-300 rounded-lg"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesCarousel;
