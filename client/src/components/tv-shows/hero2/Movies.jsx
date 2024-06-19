import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tv-shows/hot-shows/"
        );
        if (response.data) {
          setShows(response.data);
        } else {
          setError("No data found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pr-6 cursor-pointer w-full h-72">
      {shows.map((show) => (
        <img
          key={show.id}
          src={show.thumbnail}
          alt={show.title}
          className="rounded-lg w-full h-full object-cover brightness-95 hover:brightness-110 custome-transition"
        />
      ))}
    </div>
  );
};

export default Movies;
