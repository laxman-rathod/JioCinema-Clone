import mongoose, { Schema } from "mongoose";

const tvShows = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  ratings: { type: String, required: true, min: 1, max: 10 },
  genre: { type: Array, required: true },
  contentType: { type: String, required: true },
  thumbnail: { type: String },
  horizontalPoster: { type: String },
  description: { type: String },
  releaseDate: { type: Date, required: true },
  streamingType: { type: Object, required: true },
});

const tvShowsSchema = mongoose.model("TVShowsSchema", tvShows);
export default tvShowsSchema;
