
type FilterProps={
    // type of Filter : category filter / price filter
    // list of products 
}
const categories =[
"People",
"Premium",
"Pets",
"Food",
"Landmarks",
"Cities",
"Nature",
"Nature",

]

  
  export const filterCategory = (categoryItems, orignalProducts) => {
    let resultFilterProducts = [];
    let x = [...orignalProducts];
    if (categoryItems != []) {
      resultFilterProducts = x.filter((item) =>
      categoryItems?.includes(item.category)
      );
      return resultFilterProducts;
    }
  };


 export const filterPrice = (priceItems, orignalProducts, filterdCategoryData, processedProducts) => {
    let resultFilterProducts = [];
    let x = [...orignalProducts];
    if (filterdCategoryData.length <= 0) {
      if (priceItems !== []) {
        const value = priceItems[0]
          ? priceItems[0].split("-")
          : undefined;
        if (value) {
          resultFilterProducts = processedProducts.filter((product) => {
            return value[0] <= product.price && product.price <= value[1];
          });
        }
      }
      return resultFilterProducts;
    }
    else{
    if (priceItems !== []) {
      const value = priceItems[0]
        ? priceItems[0].split("-")
        : undefined;
      if (value) {
        resultFilterProducts = filterdCategoryData.filter((product) => {
          return value[0] <= product.price && product.price <= value[1];
        });
      }
    }
    return resultFilterProducts;
    
  }
};
