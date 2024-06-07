import mongoose, { Schema } from "mongoose"; // why imported schema ?

const movies = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  ratings: { type: String, required: true, min: 1, max: 10 },
  genre: { type: Array, required: true },
  contentType: { type: String, required: true },
  thumbnail: { type: String, required: true },
  // horizontalPoster: { type: String, required: true },
  description: { type: String, required: true },
  rank: { type: Number, required: true, min: 1, max: 100 },
  releaseDate: { type: Date, required: true },
});

const moviesSchema = mongoose.model("Movies", movies); // create model instance
export default moviesSchema;
