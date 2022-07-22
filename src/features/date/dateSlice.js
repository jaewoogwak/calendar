import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: "",
    page: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    },
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
    setNow: (state, action) => {
      state.page.year = action.payload.today.year;
      state.page.month = action.payload.today.month;
    },
  },
});

// Action creator
export const { setDate, nextMonth, prevMonth, setNow } = dateSlice.actions;

export default dateSlice.reducer;
