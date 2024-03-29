import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    bucket: {
      // 캘린더의 연,월,일 상태 값
      // 달력 페이지 이동함에 따라 변경
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    sideBar: {
      // 사이드바의 연,월,일 상태 값
      // 셀의 날짜를 클릭함에 따라 변경
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    },
    today: `${new Date().getFullYear()}${
      new Date().getMonth() + 1
    }${new Date().getDate()}`,
  },
  reducers: {
    setDate: (state, action) => {
      state.bucket.year = action.payload.year;
      state.bucket.month = action.payload.month;
    },

    setNow: (state, action) => {
      state.bucket.year = new Date().getFullYear();
      state.bucket.month = new Date().getMonth() + 1;
    },
    onSelectDateBox: (state, action) => {
      state.sideBar.year = action.payload.year;
      state.sideBar.month = action.payload.month;
      state.sideBar.date = action.payload.date;
    },
  },
});

// Action creator
export const { setDate, setNow, onSelectDateBox } = dateSlice.actions;

export default dateSlice.reducer;
