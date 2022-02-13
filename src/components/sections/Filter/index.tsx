import React, { useState } from "react";
import CheckBox from "src/components/ui/CheckBox";
import styles from "./Filter.module.css";

const Filter = ({ filterType, items, title }) => {
  return (
    <div className={styles.categorySectionWrapper}>
      <a className={styles.filterType}>{filterType}</a>
      {items.map((item, index) => {
        return (
          <div className={styles.categoryItem} key={index}>
            <CheckBox
              label={item.label}
              value={item.value}
              title={title}
              filterType={filterType}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
