import tvShowsSchemas from "../../schema/tv-shows/tvShowsSchema.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const createTVShows = async () => {
  try {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=booo");
    const data = res.data;
    // console.log(data[0].show.id);
    for (const items of data) {
      // const items = data[0];
      const tvShows = new tvShowsSchemas({
        id: uuidv4(),
        title: items.show.name,
        // ratings: items.show.rating.average,
        ratings: items.show.rating?.average || "7.5",
        genres: items.show.genres,
        thumbnail: items.show.image?.original || "",
        description: items.show.summary,
        releaseDate: new Date(items.show.premiered),
        language: items.show.language,
        runtime: items.show.averageRuntime,
      });
      await tvShows.save();
    }
    console.log("Document created!");
  } catch (error) {
    console.log(error);
  }
};

export { createTVShows };

// import tvShowsSchemas from "../../schema/tv-shows/tvShowsSchema.js";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";

// const createTVShows = async () => {
//   try {
//     const tvShows = new tvShowsSchemas({
//       id: uuidv4(),
//       title: "Gaanth",
//       ratings: "8",
//       genres: ["Crime", "Thriller"],
//       thumbnail:
//         "https://static.tvmaze.com/uploads/images/original_untouched/523/1308207.jpg",
//       description:
//         "Suspended Inspector Gadar Singh is summoned to a crime scene where the Chandel family is found hanging. One of them survives, leading to media frenzy and speculation of murder.",
//       releaseDate: new Date("2024-06-11"),
//       language: "Hindi",
//       runtime: "45",
//     });
//     await tvShows.save();
//     console.log("Document created!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { createTVShows };
