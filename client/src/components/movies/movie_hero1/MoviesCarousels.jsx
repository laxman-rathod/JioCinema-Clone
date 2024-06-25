import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "./styles1.css";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MoviesCarousels = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const res = useSelector((store) => store.movieSuggestions);

  const fetchGenData = async (source) => {
    try {
      const response = await axios.get(
        "https://jiocinema-dbbw.onrender.com/api/movies/sifi-fantasy/",
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

  const fetchSuggData = async (source) => {
    try {
      const response = await axios.post(
        `https://jiocinema-dbbw.onrender.com/api/movies/search/${res.keywords}/`,
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

  useEffect(() => {
    const source = axios.CancelToken.source();

    res.isGenrelContents ? fetchGenData(source) : fetchSuggData(source);

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [res.isGenrelContents]);

  return (
    <div className="w-full h-80">
      <Swiper
        slidesPerView={2.5}
        centeredSlides={true}
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
              className="rounded-2xl object-cover cursor-pointer"
              onClick={() =>
                navigate(
                  `/${movie.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    movie.title
                  }`
                )
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-button-prev custom-button-prev"></div>
      <div className="swiper-button-next custom-button-next"></div> */}
    </div>
  );
};

export default MoviesCarousels;
