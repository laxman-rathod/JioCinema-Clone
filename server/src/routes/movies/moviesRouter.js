import express from "express";
import {
  getActionMovies,
  getAllMovies,
  getAnimeMovies,
  getDramaMovies,
  getFamilyAndKidsMovies,
  getHorrorMovies,
  getRomanticMovies,
  getTopRankedMovies,
  getTopRatedMovies,
} from "../../subscribers/movies/moviesHandle.js";

const router = express.Router();

router.get("/all", getAllMovies);
router.get("/top-rated", getTopRatedMovies);
router.get("/top-ranked", getTopRankedMovies);
router.get("/romantic", getRomanticMovies);
router.get("/drama", getDramaMovies);
router.get("/horror", getHorrorMovies);
router.get("/action", getActionMovies);
router.get("/anime", getAnimeMovies);
router.get("/family-kids", getFamilyAndKidsMovies);

export default router;
