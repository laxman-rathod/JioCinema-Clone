import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDB from "./config/connectToDb.js";
import { createMovies } from "./models/movies/moviesModels.js";
import { createTVShows } from "./models/tv-shows/TVShowsModels.js";
import moviesRouter from "./routes/movies/moviesRouter.js";
import createNewMovies from "./models/movies/newMoviesModel.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const connUrl =
  process.env.CONNECTIONURL || "mongodb://localhost:27017/JioCinemaDB";

const app = express();

// Middlewares
app.use(cors()); // Use the cors middleware for all origis
app.use(bodyParser.json());
app.use(express.static("public")); // serve public files  here

// routes
app.use("/api/movies", moviesRouter);

connectToDB(connUrl);
// createNewMovies();
// createMovies();
// createTVShows();

app.listen(PORT, () => {
  console.log("Server Up!");
});
