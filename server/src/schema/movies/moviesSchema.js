import mongoose from "mongoose";

const movies = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  ratings: { type: String, required: true, min: 1, max: 10 },
  genres: { type: Array, required: true },
  contentType: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  rank: { type: Number, required: true, min: 1, max: 100 },
  releaseDate: { type: Date, required: true },
});

const moviesSchema = mongoose.model("Movies", movies);
export default moviesSchema;
