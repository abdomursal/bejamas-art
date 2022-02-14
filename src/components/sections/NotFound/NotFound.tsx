import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <a className={styles.notFoundText}>NOT FOUND</a>
    </div>
  );
};

export default NotFound;
