import express from "express";
import { genresBasedMovies } from "../../subscribers/genres_based_stream_data/genresBasedStreamData.js";

const router = express.Router();

router.get("/:genres", genresBasedMovies);

export default router;
