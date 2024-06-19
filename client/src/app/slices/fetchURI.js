import { createSlice } from "@reduxjs/toolkit";

const fetchURISlice = createSlice({
  name: "fetchURI",
  initialState: { uri: "/hindi-fresh-episodes/" },
  reducers: {
    hindiFreshEpisodes: (state, action) => {
      state.uri = action.payload.URI;
    },
    englishFreshEpisodes: (state, action) => {
      state.uri = action.payload.URI;
    },
  },
});

export const { hindiFreshEpisodes, englishFreshEpisodes } =
  fetchURISlice.actions;
export default fetchURISlice.reducer;
