import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles1.css";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  let isGenrel = null;
  let keywords = null;

  const res = useSelector((store) => store.movieSuggestions);
  isGenrel = res.isGenrelContents;
  keywords = res.keywords;

  console.log("Hey..");
  console.log(isGenrel);
  console.log(keywords);

  useEffect(() => {
    const fetchGenData = async () => {
      try {
        const response = await axios.get(
          "http://jiocinema-phi.vercel.app
/api/movies/hollywood-movies"
        );
        setMovies(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGenData();
  }, []);

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
              className="rounded-2xl cursor-pointer"
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
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Carousel;
