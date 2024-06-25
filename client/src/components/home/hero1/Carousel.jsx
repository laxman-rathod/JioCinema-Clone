import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../component_styles/styles.css";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton1 from "../../../util/Skeleton1";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  let isGenrel = null;
  let keywords = null;

  const res = useSelector((store) => store.movieSuggestions);
  isGenrel = res.isGenrelContents;
  keywords = res.keywords;

  useEffect(() => {
    const fetchGenData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/movies/hollywood-movies"
        );
        setMovies(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenData();
  }, []);

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
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img
                  src={movie.thumbnail}
                  alt={`${movie.title} poster`}
                  className="rounded-2xl cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/${
                        movie.contentType === "Movie" ? "movies" : "tv-shows"
                      }/${movie.title}`
                    )
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-big-button-prev"></div>
          <div className="swiper-big-button-next"></div>
        </div>
      )}
    </>
  );
};

export default Carousel;
