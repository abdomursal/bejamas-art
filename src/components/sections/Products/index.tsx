import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "src/components/ui/Card";
import PaginationBar from "src/components/ui/PaginationBar";
import Filter from "src/components/sections/Filter";
import styles from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Categories } from "src/constant/category";
import { Prices } from "src/constant/Prices";


export const NotFound =()=>{
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
        <a style={{fontWeight: 'bold', fontSize:30}}>NOT FOUND</a>
  </div>
    )
}


const Products = () => {
  const dispatch = useDispatch()
  
  const orignalProducts =useSelector((state:any)=> state.product.products)
  const [data, setData] = useState(orignalProducts)
  const page = useSelector((state : any)=> state.pagination.pages)
  const filterItems = useSelector((state:any)=>state.product.processedProducts.filterItems)
  const processedProducts = useSelector(
    (state: any) => state.product.processedProducts.products
  );
  
  
  const filterProduct =()=>{
    let resultFilterProducts =[]
    let x =[...orignalProducts]
    if(filterItems != []){
      resultFilterProducts= x.filter((item)=> filterItems?.includes(item.category))
      setData(resultFilterProducts)
    }
  }

  useEffect(() => {
    filterProduct()

  }, [filterItems, page])

  const displayProduct = data.length >0 ?data:processedProducts
  const diplayNotFound = data.length <=0 && filterItems?.length >0
  return (
    <div className={styles.contianer}>
      <div className={styles.product_section_header}>
        <span>
          <a className={styles.mainSectionTitle}>Photography  </a>
          <a className={styles.filterdTitle}>/Premuim Art</a>
        </span>
        <span className={styles.sortWrapper}>
          <span className={styles.sortMobileIcone}>
            <Image
              src={"/images/filterMobileIcon.png"}
              height={29}
              width={29}
            />
          </span>

          <form className={styles.selectWrapper}>
            <div className={styles.sortArrowIcon}>
              <Image src={"/images/sort.png"} height={18} width={18} />
            </div>
            <label className={styles.sortBy}>Sort By</label>
            <select className={styles.sortSelect}>
              <option value="Price">Price</option>
              <option value="Order">Order</option>
            </select>
          </form>
        </span>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.filterSection}>
          <Filter filterType="filterCategoryItems" title="category" items={Categories} />
          <Filter filterType="filterPriceItems" title="Price Range" items={Prices} />
        </div>
        <div>
          <div className={styles.productsWrapper}>
            {diplayNotFound? <NotFound/> :
             <>
            {displayProduct?.map((product, index) => {
              const { bestSeller, image, category, name, price } = product;
              return (
                <Card
                product={product}
                bestSeller={bestSeller}
                image={image}
                key={index}
                category={category}
                name={name}
                price={price}
                />
                );
              })}
              </>}
          </div>
          <div className={styles.paginationWrapper}>
            <PaginationBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
