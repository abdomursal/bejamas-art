import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "src/components/sections/Filter";
import { Categories } from "src/constant/Category";
import { Prices } from "src/constant/Prices";
import { storeData } from "src/store/productsReducer";
import { modalFilter } from "src/store/testReducer";
import Button from "../Button";

import styles from "./ModalFilter.module.css";
const ModalFilter = () => {
    const dispatch = useDispatch()
    const products = useSelector((state:any)=> state.product.products)
    const closeModal =()=>{
        dispatch(modalFilter())
        dispatch(storeData(products))
    }

  return (
    <div className={styles.container}>
      <div className={styles.filtersWrapper}>
        <Filter
          filterType="filterCategoryItems"
          title="category"
          items={Categories}
          filterName="Filter"
        />
         <Filter
          filterType="filterPriceItems"
          title="price"
          items={Prices}
          filterName="Price Range"
        />
      </div>
      <div className={styles.buttonsWrapper}>
            <Button buttonType="secondary" label="Cancel" onClick={()=>closeModal()} />
            <Button buttonType="secondary" label="Save" className={styles.saveButton} onClick={()=>closeModal()} />

          </div>

    </div>
  );
};

export default ModalFilter;
