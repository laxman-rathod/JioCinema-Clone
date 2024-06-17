import React from "react";
import "./styles6.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Carousel = () => {
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
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((image, ind) => (
          <SwiperSlide key={ind}>
            <img src={image.img} alt={`slide-${ind}`} className="rounded-lg" />
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.07] transition-opacity duration-300 rounded-lg"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Carousel;
