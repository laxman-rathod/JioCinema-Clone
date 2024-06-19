import express from "express";
import {
  comedyMovies,
  englishMovies,
  getActionMovies,
  getAllMovies,
  getAnimeMovies,
  getDramaMovies,
  getFamilyAndKidsMovies,
  getHorrorMovies,
  getRomanticMovies,
  getTopRankedMovies,
  getTopRatedMovies,
  getsifiAndFantasyMovies,
  topMovies,
} from "../../subscribers/movies/moviesHandle.js";
import { romanticShows } from "../../subscribers/tv-shows/tvshowsHandle.js";
import { streamMoviesDetails } from "../../subscribers/streaming_details/streamingDetails.js";

const router = express.Router();

router.get("/all", getAllMovies);
router.get("/top-rated", getTopRatedMovies);
router.get("/sifi-fantasy", getsifiAndFantasyMovies);
router.get("/top-ranked", getTopRankedMovies);
router.get("/romantic", getRomanticMovies);
router.get("/drama", getDramaMovies);
router.get("/horror", getHorrorMovies);
router.get("/action", getActionMovies);
router.get("/anime", getAnimeMovies);
router.get("/family-kids", getFamilyAndKidsMovies);
router.get("/hollywood-in-hindi", englishMovies);
router.get("/romantic-movies", romanticShows);
router.get("/comedy-movies", comedyMovies);
router.get("/top-movies", topMovies);

// streaming movies details
router.get("/:title", streamMoviesDetails);

export default router;
