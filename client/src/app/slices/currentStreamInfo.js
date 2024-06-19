import { createSlice } from "@reduxjs/toolkit";

const streamInfoSlice = createSlice({
  name: "currentStreamInfo",
  initialState: { MoviesTitle: "", showsTitle: "", contentType: "" },
  reducers: {
    currentMovieInfo: (state, action) => {
      state.MoviesTitle = action.payload.title;
      state.contentType = action.payload.contentType;
    },
    currentTvShowInfo: (state, action) => {
      state.showsTitle = action.payload.title;
    },
  },
});

export const { currentMovieInfo, currentTvShowInfo } = streamInfoSlice.actions;
export default streamInfoSlice.reducer;
