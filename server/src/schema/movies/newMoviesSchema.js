import mongoose, { Schema } from "mongoose"; // why imported schema ?

const movies = new Schema({
  id: String,
  title: String,
  tagLine: String,
  voteAverage: Number,
  ratings: String,
  genre: Array,
  budgets: Schema.Types.Number,
  revenue: Schema.Types.Number,
  productionCompanies: Array,
  runtime: Number,
  contentType: String,
  thumbnail: String,
  description: String,
  releaseDate: Date,
});

const newMoviesSchema = mongoose.model("New_Movies", movies); // create model instance
export default newMoviesSchema;
