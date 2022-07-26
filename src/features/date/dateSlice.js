import { createSlice } from "@reduxjs/toolkit";
import { createMonthList } from "../../components/DateList/useDate";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: "",
    page: {
      currentYear: new Date().getFullYear(),
      year: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    bucket: [],
    yearBucket: createMonthList(new Date().getFullYear()),
    monthBucket: [],
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload.date;
    },
    nextMonth: (state, action) => {
      if (state.page.month + 1 > 12) {
        state.page.year += 1;
        state.page.month = 1;
      } else state.page.month += 1;
    },
    prevMonth: (state, action) => {
      if (state.page.month - 1 < 1) {
        state.page.year -= 1;
        state.page.month = 12;
      } else state.page.month -= 1;
    },
    nextYear: (state, action) => {
      state.page.year += 1;
    },
    prevYear: (state, action) => {
      state.page.year -= 1;
    },
    setNow: (state, action) => {
      state.page.year = action.payload.today.year;
      state.page.month = action.payload.today.month;
    },
    setBucket: (state, action) => {
      state.bucket = action.payload.bucket;
    },
    setYearBucket: (state, action) => {
      state.yearBucket = action.payload.yearBucket;
    },
  },
});

// Action creator
export const {
  setDate,
  nextMonth,
  prevMonth,
  nextYear,
  prevYear,
  setNow,
  setBucket,
  setYearBucket,
} = dateSlice.actions;

export default dateSlice.reducer;
