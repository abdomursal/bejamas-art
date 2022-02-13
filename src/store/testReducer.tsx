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
  },
});

export const { modalCart } = modalSlice.actions;

export default modalSlice.reducer;
