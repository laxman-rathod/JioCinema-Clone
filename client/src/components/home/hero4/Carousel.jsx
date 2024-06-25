import React, { useEffect, useState } from "react";
import "../../component_styles/styles.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton4 from "../../../util/Skeleton4";

const Carousel = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const uriData = useSelector((store) => store.fetchURI.uri);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/tv-shows" + uriData
        );
        setEpisodes(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uriData]);

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
                      `/${
                        show.contentType === "Movie" ? "movies" : "tv-shows"
                      }/${show.title}`
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

export default Carousel;
