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
  hotMovies,
  inTheSpotLight,
  keywordBasedMovies,
  superheroMovies,
  topHollywoodMovies,
  topMovies,
  trendingHollywoodMovies,
  wizerdingWorld,
} from "../../subscribers/movies/moviesHandle.js";
import { romanticShows } from "../../subscribers/tv-shows/tvshowsHandle.js";
import { streamMoviesDetails } from "../../subscribers/streaming_details/streamingDetails.js";
import { searchMoviesByTitle } from "../../subscribers/search/searchMovies.js";

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
router.get("/trending-movies", inTheSpotLight);
router.get("/hot-movies", hotMovies);
router.get("/hollywood-movies", topHollywoodMovies);
router.get("/wizerding-world", wizerdingWorld);
router.get("/hollywood-trending", trendingHollywoodMovies);
router.get("/superhero-movies", superheroMovies);

// streaming movies details
router.get("/:title", streamMoviesDetails);
router.post("/:search", searchMoviesByTitle);

// keyword based movies serach
router.post("/search/:keywords", keywordBasedMovies); 

export default router;
