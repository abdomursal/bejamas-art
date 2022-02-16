import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";
import { getfeaturedProduct } from "src/utils/featuredProduct";
import { findProductById } from "src/utils/cartUtils";

// const initialState ={
//   modalCart:
// }
export const modalSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    modalCart: (state: any) => {
      return { ...state, modalCart: !state.modalCart };
    },
    modalFilter: (state: any) => {
      return { ...state, modalFilter: !state.modalFilter };
    },
  },
});

export const { modalCart, modalFilter } = modalSlice.actions;

export default modalSlice.reducer;
