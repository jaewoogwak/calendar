import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    currentView: "month",
  },
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload.currentView;
    },
  },
});

// Action creator
export const { setView } = viewSlice.actions;

export default viewSlice.reducer;
