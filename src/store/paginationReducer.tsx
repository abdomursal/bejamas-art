import { createSlice } from "@reduxjs/toolkit";
import { PaginationTypes } from "src/types/store/pagination";


export const initialState: PaginationTypes = {
    pages:[1],
    activePage: 1,
    count:1
};

export const pageSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
      changePage: (state,action) => {
        return { ...state, activePage: action.payload };
      },    
      storePage: (state, action) => {
        return {...state, activePage:action.payload}
      },
      storeCount: (state, action) => {
        const pages = []
        for(let i =1; i<=action.payload;i++){
            pages.push(i);
        }
        return {...state, count:action.payload, pages}
      },

  },
});

export const {  changePage, storePage, storeCount } = pageSlice.actions;

export default pageSlice.reducer;
