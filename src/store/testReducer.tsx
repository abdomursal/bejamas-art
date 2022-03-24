import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";

export const modalSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    modalCart: (state) => {
      return { ...state, modalCart: !state.modalCart };
    },
    modalFilter: (state) => {
      return { ...state, modalFilter: !state.modalFilter };
    },
  },
});

export const { modalCart, modalFilter } = modalSlice.actions;

export default modalSlice.reducer;
