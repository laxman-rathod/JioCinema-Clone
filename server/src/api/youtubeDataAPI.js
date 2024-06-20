import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YTAPI_KEY || "AIzaSyCreuSzyjIG1FFU1R0DUyLHxxXMQ5wAGmI",
});

const searchData = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await youtube.search.list({
      part: "snippet",
      q: query,
      maxResults: 3,
    });
    res.json(response.data.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export { searchData };
