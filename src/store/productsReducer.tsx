import { createSlice, current } from "@reduxjs/toolkit";
import { ProductTypes } from "src/types/store/product";
import { getfeaturedProduct } from "src/utils/featuredProduct";

export const initialState: ProductTypes = {
  products: [],
  featuredProduct: [],
  processedProducts: {
    products: [],
    filterType: "",
    filterItems: [],
    filterCategoryItems: [],
    filterPriceItems: [],
    sortType: "",
  },
};

export const ProductSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addFilterItem: (state, action) => {
      const filterArray = [];
      const filterType = action.payload.type;
      const filterItems = state.processedProducts[filterType];
      if (filterItems.indexOf(action.payload.value) == -1) {
        filterArray.push(action.payload.value);
      }
      if (filterType === "filterCategoryItems") {
        return {
          ...state,
          processedProducts: {
            ...state.processedProducts,
            filterCategoryItems: [
              ...state.processedProducts[filterType],
              ...filterArray,
            ],
          },
        };
      }
      return {
        ...state,
        processedProducts: {
          ...state.processedProducts,
          filterPriceItems: [
            ...state.processedProducts[filterType],
            ...filterArray,
          ],
        },
      };
    },
    getSortType: (state, action) => {
      return {
        ...state,
        processedProducts: {
          ...state.processedProducts,
          sortType: action.payload,
        },
      };
    },

    removeFilterItem: (state, action) => {
      const filterType = action.payload.type;
      const filterArray = state.processedProducts[filterType];

      let x = filterArray.filter((item) => {
        return item != action.payload.value;
      });
      if (filterType === "filterCategoryItems") {
        return {
          ...state,
          processedProducts: {
            ...state.processedProducts,
            filterCategoryItems: [...x],
          },
        };
      }
      return {
        ...state,
        processedProducts: {
          ...state.processedProducts,
          filterPriceItems: [...x],
        },
      };
    },

    featuredProduct: (state, action) => {
      return getfeaturedProduct(state, action);
    },

    storeData: (state, action) => {
      return {
        ...state,
        products: action.payload,
        processedProducts: {
          ...state.processedProducts,
          products: action.payload,
        },
      };
    },
  },
});

export const {
  removeFilterItem,
  addFilterItem,
  featuredProduct,
  storeData,
  getSortType,
} = ProductSlice.actions;

export default ProductSlice.reducer;
