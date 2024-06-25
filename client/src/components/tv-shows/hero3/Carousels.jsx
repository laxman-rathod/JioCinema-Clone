import React, { useEffect, useState } from "react";
import "./styles3.css";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Carousels = () => {
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate();
  const uriData = useSelector((store) => store.fetchURI.uri);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/tv-shows" + uriData
        );
        setEpisodes(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [uriData]);

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
        {episodes.map((show) => (
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
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Carousels;
