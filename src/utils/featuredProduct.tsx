
export const getfeaturedProduct = (state, action) => {
    const featuredProduct = action.payload.find(
      (product) => product.featured == true
    )
    return {...state, featuredProduct: featuredProduct};
  }