import React, { useEffect, useState } from "react";
import "./styles7.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MoviesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://jiocinema-phi.vercel.app/api/movies/wizerding-world",
          { cancelToken: source.token }
        );
        setMovies(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log(err.message);
        } else {
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return (
    <div className="w-full h-[17rem] cursor-pointer">
      <Swiper
        slidesPerView={6.5}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={movie.thumbnail}
              alt={`${movie.title} poster`}
              className="rounded-lg"
            />
            <div
              onClick={() =>
                navigate(
                  `/${movie.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    movie.title
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

export default MoviesCarousel;
