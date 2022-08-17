import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../components/Mode/mode";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    currentView: "month",
    isClickedTodayBtn: false,
    mode: localStorage.getItem("theme"),
    style: localStorage.getItem("theme") === "dark" ? dark : light,
  },
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload.currentView;
    },
    setIsClickedTodayBtn: (state, action) => {
      state.isClickedTodayBtn = !state.isClickedTodayBtn;
    },
    onToggle: (state, action) => {
      console.log("onTooglee");
      if (state.mode === "dark") {
        state.mode = "light";
        state.style = light;
      } else {
        state.mode = "dark";
        state.style = dark;
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload.theme;
    },
  },
});

// Action creator
export const { setView, setIsClickedTodayBtn, onToggle, setTheme } =
  viewSlice.actions;

export default viewSlice.reducer;
