import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles6.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Carousels = () => {
  const [tvShows, setTvShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://jiocinema-phi.vercel.app/api/tv-shows/top-hindiShows/"
        );
        setTvShows(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[17rem] cursor-pointer">
      <Swiper
        slidesPerView={6.5}
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
        {tvShows.map((shows) => (
          <SwiperSlide key={shows.id}>
            <img
              src={shows.thumbnail}
              alt={`${shows.title} poster`}
              className="rounded-lg"
            />
            <div
              onClick={() =>
                navigate(
                  `/${shows.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    shows.title
                  }`
                )
              }
              className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.10] transition-opacity duration-300 rounded-lg"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Carousels;
