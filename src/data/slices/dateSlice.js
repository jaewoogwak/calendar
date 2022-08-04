import { createSlice } from "@reduxjs/toolkit";
import { createMonthList } from "../../components/DateList/modules/dateArray";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: "",
    page: {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    bucket: [],
    yearBucket: createMonthList(new Date().getFullYear()),
    newBucket: {
      yy: new Date().getFullYear(),
      mm: new Date().getMonth() + 1,
      dd: new Date().getDate(),
    },
    sideBar: {
      yy: new Date().getFullYear(),
      mm: new Date().getMonth() + 1,
      dd: new Date().getDate(),
    },
  },
  reducers: {
    setDate2: (state, action) => {
      state.newBucket.yy = action.payload.year;
      state.newBucket.mm = action.payload.month;
    },
    setDate: (state, action) => {
      state.date = action.payload.date;
    },
    setNow: (state, action) => {
      state.newBucket.yy = new Date().getFullYear();
      state.newBucket.mm = new Date().getMonth() + 1;
    },
    setBucket: (state, action) => {
      state.bucket = action.payload.bucket;
    },
    setYearBucket: (state, action) => {
      state.yearBucket = action.payload.yearBucket;
    },
    onSelectDateBox: (state, action) => {
      console.log("onSelectDateBox");
      state.sideBar.yy = action.payload.year;
      state.sideBar.mm = action.payload.month;
      state.sideBar.dd = action.payload.date;
    },
  },
});

// Action creator
export const {
  setDate2,
  setDate,
  setNow,
  setBucket,
  setYearBucket,
  onSelectDateBox,
} = dateSlice.actions;

export default dateSlice.reducer;
