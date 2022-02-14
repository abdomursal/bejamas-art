import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "src/components/ui/Card";
import PaginationBar from "src/components/ui/PaginationBar";
import Filter from "src/components/sections/Filter";
import styles from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Categories } from "src/constant/Category";
import { Prices } from "src/constant/Prices";
import NotFound from "../NotFound/NotFound";
import { filterCategory, filterPrice } from "src/utils/filterUtils";

const Products = () => {
  const orignalProducts = useSelector((state: any) => state.product.products);
  const [data, setData] = useState([]);
  const page = useSelector((state: any) => state.pagination.pages);
  const filterCategoryItems = useSelector(
    (state: any) => state.product.processedProducts.filterCategoryItems
  );
  const filterPriceItems = useSelector(
    (state: any) => state.product.processedProducts.filterPriceItems
  );

  const processedProducts = useSelector(
    (state: any) => state.product.processedProducts.products
  );

  useEffect(() => {
    setData(filterCategory(filterCategoryItems, orignalProducts));
    if (filterPriceItems.length > 0) {
      setData(
        filterPrice(filterPriceItems, orignalProducts, data, processedProducts)
      );
    }
  }, [filterCategoryItems, filterPriceItems, page]);

  const displayProduct = data?.length > 0 ? data : processedProducts;
  const diplayNotFound =
    data.length <= 0 &&
    (filterCategoryItems.length > 0 || filterPriceItems.length > 0);


  return (
    <div className={styles.contianer}>
      <div className={styles.product_section_header}>
        <span>
          <a className={styles.mainSectionTitle}>Photography </a>
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
          <Filter
            filterType="filterCategoryItems"
            title="category"
            items={Categories}
            filterName="category"
          />
          <Filter
            filterType="filterPriceItems"
            title="Price Range"
            items={Prices}
            filterName="price"
          />
        </div>
        <div>
          <div className={styles.productsWrapper}>
            {diplayNotFound ? (
              <NotFound />
            ) : (
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
              </>
            )}
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