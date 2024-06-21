import { createSlice } from "@reduxjs/toolkit";

const searchData = createSlice({
  name: "searchData",
  initialState: { inputValue: "" },
  reducers: {
    inputValueChanged: (state, action) => {
      state.inputValue = action.payload.inputValue;
    },
  },
});

export const { inputValueChanged } = searchData.actions;
export default searchData.reducer;
