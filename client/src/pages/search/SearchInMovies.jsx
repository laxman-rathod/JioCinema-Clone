import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const SearchInMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const inputData = useSelector((store) => store.searchData.inputValue);

  useEffect(() => {
    if (inputData) {
      const fetchData = async () => {
        try {
          const moviesRes = await axios.post(
            `http://jiocinema-phi.vercel.app/api/movies/${inputData}`
          );
          if (moviesRes.data) {
            setMovies(moviesRes.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    } else {
      const fetchMovies = async () => {
        try {
          const moviesRes = await axios.get(
            "http://jiocinema-phi.vercel.app/api/movies/hollywood-trending"
          );
          if (moviesRes.data) {
            setMovies(moviesRes.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchMovies();
    }
  }, [inputData]);

  return (
    <>
      {inputData ? (
        <div className="w-full cursor-pointer font-poppins">
          <h1 className="text-white font-extrabold text-xl mb-8 mt-8">
            "{inputData}" In Movies
          </h1>
          <div className="h-[11rem]">
            <Swiper
              slidesPerView={4.5}
              spaceBetween={10}
              loop={true}
              className="Swiper"
            >
              {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <img
                    src={movie.thumbnail}
                    alt={`${movie.title} poster`}
                    className="rounded-lg"
                  />
                  <div className="absolute w-full z-50 inset-[8.3rem] left-2 text-white">
                    <h1 className="text-xs text-silver leading-6 font-semibold">
                      {movie.title}
                    </h1>
                    <div className="flex items-center gap-2 text-[0.70rem] text-lightenThik font-medium flex-wrap">
                      <h2>{movie.genres.join(" • ")}</h2>
                      <h2>{movie.ratings + "/10"}</h2>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
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
        </div>
      ) : (
        <div className="w-full cursor-pointer font-poppins">
          <h1 className="text-white font-extrabold text-xl mb-8 mt-8">
            Trending in Movies
          </h1>
          <div className="h-[17rem]">
            <Swiper
              slidesPerView={6.5}
              spaceBetween={10}
              loop={true}
              className="Swiper"
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
        </div>
      )}
    </>
  );
};

export default SearchInMovies;
