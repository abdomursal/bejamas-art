
export const getfeaturedProduct = (state: any, action) => {
    const featuredProduct = action.payload.find(
      (product) => product.featured == true
    )
    return {...state, featuredProduct: featuredProduct};
  }