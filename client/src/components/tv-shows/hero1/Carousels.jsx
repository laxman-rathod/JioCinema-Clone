import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles1.css";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [tvShows, setTvShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tv-shows/toprated-originals/"
        );
        setTvShows(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
        {tvShows.map((shows) => (
          <SwiperSlide key={shows.id}>
            <img
              src={shows.thumbnail}
              alt={`${shows.title} movie thumbnail`}
              className="rounded-2xl cursor-pointer"
              onClick={() =>
                navigate(
                  `/${shows.contentType === "Movie" ? "movies" : "tv-shows"}/${
                    shows.title
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
