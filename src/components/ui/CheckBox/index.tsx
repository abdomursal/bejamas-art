import React, { useRef, useState, useEffect } from "react";
import style from "./CheckBox.module.css";
import { CheckBoxProps } from "src/types/components/ui/CheckBox";
import { useDispatch, useSelector } from "react-redux";
import { addFilterItem, removeFilterItem } from "src/store/productsReducer";
const CheckBox = ({
  value,
  label,
  filterType,
  title,
  ...props
}: CheckBoxProps) => {
  const checkBoxRef = useRef();

  const dispatch = useDispatch();
  const onChange = (e) => {
    if (e.target.checked) {
      dispatch(addFilterItem({ type: filterType, value: value }));
    }
    else{
    dispatch(removeFilterItem({ type: filterType, value: value }));
    }
  };

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
