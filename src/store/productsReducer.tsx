import { createSlice, current } from "@reduxjs/toolkit";
import { ProductTypes } from "src/types/store/product";
import { getfeaturedProduct } from "src/utils/featuredProduct";
import { filter } from "src/utils/FilterUtils";

// import { filter} from 'src/utils/filterUtils'

export const initialState: ProductTypes = {
  products: [],
  featuredProduct: [],
  processedProducts: {
    products: [],
    filterType: "",
    filterItems: [],
    sortType: "",
  },
};


export const ProductSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    // storefeaturedProduct: (state, action) => {
    //   return { ...state, featuredProduct: action.payload };
    // },
    addFilterItem: (state: any, action) => {
      const filterArray = [];
      const filterItems=state.processedProducts.filterItems
      let products = action.payload.orignalProducts;
      if (filterItems.indexOf(action.payload.value) == -1) {
        filterArray.push(action.payload.value);
      }
    
      return {
        ...state,
        processedProducts: {
          ...state.processedProducts,
          filterItems: [...state.processedProducts.filterItems, ...filterArray],
        },
      };
    },
    removeFilterItem: (state: any, action) => {
      const filterArray = state.processedProducts.filterItems;
      let x = filterArray.filter((item) => {
        return item != action.payload.value;
      });

      return {
        ...state,
        processedProducts: {
          ...state.processedProducts,
          filterItems: [...x],
        },
      };
    },
    //  filterProducts:(state:any, action)=>{
    //   let filterdProducts =[]
    //   const orignalProducts =action.payload
    //   const filterItems = action.payload.filterItems
    //   if(filterItems != []){
    //     // filterdProducts= orignalProducts?.filter((item)=> filterItems.includes(item.category))

    //     return {
    //       ...state,
    //       products: action.payload,
    //       processedProducts: {
    //         ...state.processedProducts,
    //         products: []
    //     }
    //   }
    // }
    //   else
    //   return{
    //      ...state,
    //     products: action.payload,
    //     processedProducts: {
    //       ...state.processedProducts,
    //       products: []
    //     }
    //   }
    // },
    featuredProduct: (state: any, action) => {
      return getfeaturedProduct(state, action);
    },

    storeData: (state: any, action: any) => {
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

  // categoryFilter: (state, action) => {
  //   // filter products list  based on the categories choosen
  // },
  // priceFilter: (state, action) => {
  //   // filter products list based on the price range choosen
  // },
  // sortByPrice: (state) => {

  // },
  // sortByAlphabet: () => {
  //   //sort product list based on alphabets
  // },
  // },
});

export const {
  // categoryFilter,
  // priceFilter,
  // sortByPrice,
  // sortByAlphabet,
  // storeProcessedProducts,
  filterProducts,
  removeFilterItem,
  addFilterItem,
  // storefeaturedProduct,
  featuredProduct,
  storeData,
} = ProductSlice.actions;

export default ProductSlice.reducer;

// storeProcessedProducts: (state, action) => {
//   //check if filter doesnt'have any filter or sort
//   // const newProduct:Array<any> = [...action.payload]
//   // if(state.filter.length>0){
//   //   //filter data
//   //  const filtered =  filter(state.filter, action.payload)
//   //   newProduct.push([...filtered])
//   // }

//   // return { ...state, processedProducts: action.payload };
// },
//
//
// addFilter: (state, action) => {
//   // `const newProduct =[]
//   // if(state.filter.length>0){
//   //   //filter data
//   //  const filtered =  filter(state.filter, state.products)
//   //   // newProduct.push([...filtered])
//   // }
//   // return { ...state, filter: [...state.filter, action.payload],
//     // processedProducts:newProduct
//   },
