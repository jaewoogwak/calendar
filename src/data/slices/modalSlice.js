import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
    opendModalDateInfo: "",
  },
  reducers: {
    setModalVisible: (state, action) => {
      console.log("setModalVislble", action.payload);
      state.modalVisible = action.payload;
    },
    setOpendModalDateInfo: (state, action) => {
      console.log("setOpendModalDateInfo");
      state.opendModalDateInfo = action.payload.date;
    },
  },
});

// Action creator
export const { setModalVisible, setOpendModalDateInfo } = modalSlice.actions;

export default modalSlice.reducer;
