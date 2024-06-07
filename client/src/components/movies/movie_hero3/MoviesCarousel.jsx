import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MoviesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/movies/top-ranked/",
          { cancelToken: source.token }
        );
        setMovies(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  if (loading) console.log("loading...");
  if (error) console.log("error..", error);

  return (
    <div className="w-full h-64 cursor-pointer">
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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={movie.thumbnail}
              alt={`${movie.title} poster`}
              className="rounded-lg size-full object-cover"
            />
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.07] transition-opacity duration-300 rounded-lg"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default MoviesCarousel;
