import tvShowsSchemas from "../../schema/tv-shows/tvShowsSchema.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const createTVShows = async () => {
  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
    params: {
      country: "in",
      year_max: "2020",
      series_granularity: "show",
      genres: "romance,comedy",
      order_direction: "asc",
      order_by: "original_title",
      year_min: "2020",
      show_original_language: "en",
      genres_relation: "and",
      output_language: "en",
      rating_max: "80",
      show_type: "movie",
      rating_min: "60",
    },
    headers: {
      "x-rapidapi-key": "7352b8aa12msha4d1a1976ef54bdp1395a9jsnaa48ceb784e7",
      "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
    },
  };
  try {
    const res = await axios.request(options);
    const data = res.data;
    for (const items of data) {
      const tvShows = new tvShowsSchemas({
        id: uuidv4(),
        title: items.title,
        ratings: items.rating,
        genre: items.genre,
        contentType: items.itemType,
        thumbnail: items.imageSet.verticalPoster.w720,
        horizontalPoster: items.imageSet.horizontalPoster.w1440,
        description: items.overview,
        releaseDate: items.releaseYear,
        streamingType: items.streamingOptions,
      });
      await tvShows.save();
    }
    console.log("Document created!");
  } catch (error) {
    console.log(error);
  }
};

export { createTVShows };
