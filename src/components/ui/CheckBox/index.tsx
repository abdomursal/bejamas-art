import React, { useRef, useState, useEffect } from "react";
import style from "./CheckBox.module.css";
import { CheckBoxProps } from "src/types/components/ui/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { addFilterItem, filterProducts, removeFilterItem, storeData } from "src/store/productsReducer";
import { filter as filterUtil } from "src/utils/FilterUtils";
const CheckBox = ({
  value,
  label,
  filterType,
  title,
  ...props
}: CheckBoxProps) => {
  const checkBoxRef = useRef();
  // const filterData = useSelector((state) => {
  //   state.product.process;
  // });
  const processedProducts = useSelector((state: any) => state.product.processedProducts.products);
  const filterItems = useSelector((state:any)=>state.product.processedProducts.filterItems)

  const orignalProducts = useSelector((state:any) => state.product.products);
  
  // console.log("LOG e", processedProducts);
  // const products = useSelector((state)=>{state.product.products})

  const dispatch = useDispatch();

  const onChange = (e) => {

    if (e.target.checked == true) {
      dispatch(addFilterItem({ type: filterType, value: value }));
      // dispatch(filterProducts({filterItems ,orignalProducts}))
    } else if (e.target.checked == false) {
      dispatch(removeFilterItem({value}));
    }
  };

  // useEffect(() => {
  //   if(processedProducts.length<0){
  //     dispatch(storeData(orignalProducts))
  //   }
  //   // onChange
  // }, [processedProducts]);

  return (
    <>
      <label className={style.container}>
        {label}
        <input
          type="checkbox"
          value={value}
          {...props}
          onChange={onChange}
          ref={checkBoxRef}
        />
        <span className={style.checkmark}></span>
      </label>
    </>
  );
};

export default CheckBox;
