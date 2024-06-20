import React, { useEffect, useState } from "react";
import axios from "axios";

// import "./styles7.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Carousels = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/movies/romantic-movies/"
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

  if (loading) console.log("loading...");
  if (error) console.log("error..", error);

  return (
    <div className="mx-6 mt-3">
      <div className="w-full h-80 cursor-pointer">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
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
          {movies.map((movies) => (
            <SwiperSlide key={movies.id}>
              <img
                src={movies.thumbnail}
                alt={`${movies.title} poster`}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.08] transition-opacity duration-300 rounded-lg"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-80 mt-4 cursor-pointer">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
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
          {movies.map((movies) => (
            <SwiperSlide key={movies.id}>
              <img
                src={movies.thumbnail}
                alt={`${movies.title} poster`}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.07] transition-opacity duration-300 rounded-lg"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-80 mt-4 cursor-pointer">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
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
          {movies.map((movies) => (
            <SwiperSlide key={movies.id}>
              <img
                src={movies.thumbnail}
                alt={`${movies.title} poster`}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.07] transition-opacity duration-300 rounded-lg"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousels;
