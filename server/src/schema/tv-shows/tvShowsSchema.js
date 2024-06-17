import mongoose from "mongoose";

const tvShows = new mongoose.Schema({
  id: { type: String, required: true },
  title: String,
  ratings: String,
  genres: Array,
  thumbnail: String,
  horizontalPoster: String,
  description: String,
  releaseDate: {
    type: Date,
    get: (date) => {
      if (date) {
        return date.toISOString().slice(0, 10); // Format to YYYY-MM-DD
      }
    },
  },
  language: Array,
  runtime: Number,
});

const tvShowsSchema = mongoose.model("TVShowsSchema", tvShows);
export default tvShowsSchema;
