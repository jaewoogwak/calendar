import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    currentView: "month",
    isClickedTodayBtn: false,
  },
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload.currentView;
    },
    setIsClickedTodayBtn: (state, action) => {
      state.isClickedTodayBtn = !state.isClickedTodayBtn;
    },
  },
});

// Action creator
export const { setView, setIsClickedTodayBtn } = viewSlice.actions;

export default viewSlice.reducer;
