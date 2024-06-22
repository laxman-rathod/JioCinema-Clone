import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "home",
};
const sliceName = "tabControls";

const currentTabSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload.tab;
    },
    reset: () => initialState, // Reset action to clear the state
  },
});

export const { setCurrentTab, reset } = currentTabSlice.actions;
export default currentTabSlice.reducer;
