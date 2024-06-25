import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../component_styles/styles.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton1 from "../../../util/Skeleton1";

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
    <>
      {isLoading ? (
        <Skeleton1 />
      ) : (
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
                      `/${
                        shows.contentType === "Movie" ? "movies" : "tv-shows"
                      }/${shows.title}`
                    )
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-big-button-prev text-[#c5c2c2] font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="swiper-big-button-next text-[#c5c2c2] font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
