import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles1.css";
import { Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

const Carousel = () => {
  const topMovies = [
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
    {
      name: "nm",
      id: uuidv4(),
      img: "/assets/openhaimer_movie_image_full.jpg",
    },
  ];

  return (
    <div className="w-full h-80">
      <Swiper
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
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
        {topMovies.map((movies) => (
          <SwiperSlide key={movies.id}>
            <img
              src={movies.img}
              alt={`${movies.name} movie thumbnail`}
              className="rounded-2xl cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Carousel;
