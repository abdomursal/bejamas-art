import { createSlice } from "@reduxjs/toolkit";
import { ProductItemTypes } from "src/types/store/product";
import { findProductById } from "src/utils/cartUtils";

export type CartTypes={
    cart:Array<ProductItemTypes>|[]
} 

export const initialState: CartTypes = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addCart: (state: CartTypes, action) => {
        const existingProduct = findProductById(state, action.payload.id);
        if (existingProduct) {
          return {...state};
        }
      return { ...state, cart:[...state.cart, action.payload] };
    },
    clearCart: (state) => {
      return { ...state, cart: [] };
    },
    
  },
});

export const { addCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
