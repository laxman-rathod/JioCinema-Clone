import mongoose from "mongoose";

const movies = new mongoose.Schema({
  id: String,
  title: String,
  tagLine: String,
  voteAverage: Number,
  ratings: String,
  genre: Array,
  budgets: Number,
  revenue: Number,
  productionCompanies: Array,
  runtime: Number,
  contentType: String,
  thumbnail: String,
  description: String,
  releaseDate: Date,
});

const newMoviesSchema = mongoose.model("New_Movies", movies); // create model instance
export default newMoviesSchema;
