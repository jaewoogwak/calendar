import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../components/Mode/mode";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    currentView: "month",
    isClickedTodayBtn: false,
    mode: "dark",
    style: {
      text: "white",
      button: "#716f75",
      background: "#211d27",
      boxBorder: "#716f75",
      pageControllerBg: "#716f75",
      isWeekend: "#29262D",
      isWeekendInYear: "gray",
      selectedTodo: "skyblue",
      sideBarDelBtn: "#511818",
    },
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
  },
});

// Action creator
export const { setView, setIsClickedTodayBtn, onToggle } = viewSlice.actions;

export default viewSlice.reducer;
