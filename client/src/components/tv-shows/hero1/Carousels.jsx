import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles1.css";
import { Navigation } from "swiper/modules";
import axios from "axios";

const Carousel = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tv-shows/toprated-originals/"
        );
        setTvShows(response.data);
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
