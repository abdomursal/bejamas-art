
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


export const filter = (filterArray,products) => {
  // get all the values from filter array 
  const newProducts = []
  filterArray?.map(el=>{
    if(el.type==='category'){
      const filteredCategory = products.filter(product=>product.category.toLowerCase()===el.value.toLowerCase())
      newProducts.push(filteredCategory)
    }
    // else if(el.type === 'price'){
    //   const value = el.value.split('-');
    //   value[0]
    //   const filteredPrice = products.filter(product=> value[1] >=product.price >= value[0] )
    //   newProducts.push([...filteredPrice])
    // }
  });
  // const data:any =  [...new Set(newProducts?.map(item => item.id))];
  return newProducts

};