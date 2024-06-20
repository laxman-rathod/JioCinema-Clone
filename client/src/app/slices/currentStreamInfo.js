import { createSlice } from "@reduxjs/toolkit";

const streamInfoSlice = createSlice({
  name: "currentStreamInfo",
  initialState: {
    contentType: "",
    currentStream: "",
  },
  reducers: {
    currentStreamInformation: (state, action) => {
      state.currentStream = action.payload.currentStream;
      state.contentType = action.payload.contentType;
    },
  },
});

export const { currentStreamInformation } = streamInfoSlice.actions;
export default streamInfoSlice.reducer;
