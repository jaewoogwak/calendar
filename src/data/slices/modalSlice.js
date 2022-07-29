import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalVisible: false,
  },
  reducers: {
    setModalVisible: (state, action) => {
      console.log("setModalVislble", action.payload);
      state.modalVisible = action.payload;
    },
  },
});

// Action creator
export const { setModalVisible } = modalSlice.actions;

export default modalSlice.reducer;
