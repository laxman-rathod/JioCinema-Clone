import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles1.css";
import { Navigation } from "swiper/modules";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/movies/all/"
        );
        setMovies(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(movies);
  if (loading) console.log("loading...");
  if (error) console.log("error..", error);

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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={movie.thumbnail}
              alt={`${movie.title} poster`}
              className="rounded-2xl object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev custom-button-prev"></div>
      <div className="swiper-button-next custom-button-next"></div>
    </div>
  );
};

export default Carousel;
