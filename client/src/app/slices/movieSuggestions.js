import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: null,
  keywords: null,
  isGenrelContents: true,
};
const sliceName = "movieSuggestions";

const suggestionSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload.tags;
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload.keywords;
    },
    setIsGenrelContents: (state) => {
      state.isGenrelContents = !state.isGenrelContents;
    },
  },
});

export const { setTags, setKeywords, setIsGenrelContents } =
  suggestionSlice.actions;
export default suggestionSlice.reducer;
