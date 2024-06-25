import React, { useEffect, useState } from "react";
import "../../component_styles/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton4 from "../../../util/Skeleton4";

const MoviesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/movies/hollywood-trending",
          { cancelToken: source.token }
        );
        setMovies(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log(err.message);
        } else {
          console.log(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton4 />
      ) : (
        <div className="w-full h-[17rem] cursor-pointer">
          <Swiper
            slidesPerView={6.5}
            spaceBetween={10}
            loop={true}
            className="mySwiper"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img
                  src={movie.thumbnail}
                  alt={`${movie.title} poster`}
                  className="rounded-lg"
                />
                <div
                  onClick={() =>
                    navigate(
                      `/${
                        movie.contentType === "Movie" ? "movies" : "tv-shows"
                      }/${movie.title}`
                    )
                  }
                  className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.10] transition-opacity duration-300 rounded-lg"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default MoviesCarousel;
