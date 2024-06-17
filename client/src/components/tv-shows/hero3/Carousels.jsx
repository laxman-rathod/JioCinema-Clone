import React, { useEffect, useState } from "react";
import "./styles3.css";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Carousels = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tv-shows/fresh-episodes/"
        );
        setEpisodes(response.data);
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
        {episodes.map((show) => (
          <SwiperSlide key={show.id}>
            <img
              src={show.thumbnail}
              alt={`${show.title} poster`}
              className="rounded-lg"
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

export default Carousels;
