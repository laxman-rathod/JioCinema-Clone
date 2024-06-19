import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles12.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentMovieInfo } from "../../../app/slices/currentStreamInfo";

const MoviesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = (title, contentType) => {
    console.log("You Clicked me..");
    dispatch(currentMovieInfo({ title: title, contentType: contentType }));
    navigate("/streaming-details");
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/movies/horror/",
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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={movie.thumbnail}
              alt={`${movie.title} poster`}
              className="rounded-lg size-full"
            />
            <div
              onClick={() => handleOnClick(movie.title, movie.contentType)}
              className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.07] transition-opacity duration-300 rounded-lg"
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
