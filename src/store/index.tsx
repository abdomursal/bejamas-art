import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./testReducer";
import cartSlice from "./cartReducer";
import pageSlice from "./paginationReducer";
import ProductSlice from "./productsReducer";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    cart: cartSlice,
    pagination: pageSlice, 
    product: ProductSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
