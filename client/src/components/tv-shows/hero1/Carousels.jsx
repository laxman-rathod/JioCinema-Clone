import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../component_styles/styles.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Carousel = () => {
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const res = useSelector((store) => store.movieSuggestions);

  const fetchGenData = async () => {
    try {
      const response = await axios.get(
        "https://jiocinema-dbbw.onrender.com/api/tv-shows/toprated-originals/"
      );
      setTvShows(response.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggData = async () => {
    try {
      const response = await axios.post(
        `https://jiocinema-dbbw.onrender.com/api/tv-shows/search/${res.keywords}/`
      );
      setTvShows(response.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    res.isGenrelContents ? fetchGenData() : fetchSuggData();
  }, [res.isGenrelContents, res.keywords]);

  return (
    <div className="w-full h-80">
      <Swiper
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-big-button-next",
          prevEl: ".swiper-big-button-prev",
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
      <div className="swiper-big-button-prev"></div>
      <div className="swiper-big-button-next"></div>
    </div>
  );
};

export default Carousel;
