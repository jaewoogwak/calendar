import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: "",
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload.date;
    },
  },
});

// Action creator
export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
