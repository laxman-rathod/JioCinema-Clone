import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Description = () => {
  const [streamInfo, setStreamInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { streamType, title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentStreamData = await axios.get(
          `http://localhost:8000/api/${streamType}/${title}`
        );
        setStreamInfo(currentStreamData.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [streamType, title]);

  if (loading) console.log("loading...");
  if (error) console.log("error..");

  return (
    <div className="size-full font-poppins text-white px-6">
      <div className="pt-4">
        <h1 className="text-2xl font-black">{streamInfo.title}</h1>
        <p className="mb-6 text-[0.80rem] pt-2 font-medium leading-5">
          {streamInfo.genres}
        </p>
      </div>
      <div className="leading-5 text-[0.80rem] pb-2">
        <p>{streamInfo.description}</p>
      </div>
    </div>
  );
};

export default Description;
