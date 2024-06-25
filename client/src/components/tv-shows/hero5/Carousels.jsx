import React, { useEffect, useState } from "react";
import "./styles5.css";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Carousels = () => {
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/movies/anime/"
        );
        setAnimes(response.data);
      } catch (err) {
        console.log(err.message);
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
        {animes.map((anime) => (
          <SwiperSlide key={anime.id}>
            <img
              src={anime.thumbnail}
              alt={`${anime.title} poster`}
              className="rounded-lg"
            />
            <div
              onClick={() =>
                navigate(
                  `/${anime.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    anime.title
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
