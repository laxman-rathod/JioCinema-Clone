import React, { useEffect, useState } from "react";
import "./styles-hero3.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HotRightNow = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/tv-shows/toprated-originals"
        );
        setShows(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-[22rem] cursor-pointer">
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {shows.map((show) => (
          <SwiperSlide key={show.id}>
            <img
              src={show.thumbnail}
              alt={`${show.title} poster`}
              className="rounded-lg"
            />
            <div
              onClick={() =>
                navigate(
                  `/${show.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    show.title
                  }`
                )
              }
              className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.10] transition-opacity duration-300 rounded-lg"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotRightNow;
