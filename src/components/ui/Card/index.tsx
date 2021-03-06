import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import { CardProps } from "src/types/components/ui/Card";
import { addCart } from "src/store/cartReducer";
import { modalCart } from "src/store/testReducer";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

const Card = ({
  bestSeller,
  category,
  name,
  price,
  image,
  product,
}: CardProps) => {
  const { src, alt } = image;
  const [hover, setHover] = useState(false);
  const modal = useAppSelector((state) => state.modal.modalCart);

  const dispatch = useAppDispatch();
  const addtoCartHandelr = () => {
    dispatch(addCart(product));
    dispatch(modalCart());
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.cardWrapper}
      >
        {bestSeller && (
          <a className={styles.bestSellerTagWrapper}> Best Seller</a>
        )}
        <div className={styles.imageWrapper}>
          <Image
            src={src}
            className={styles.productImage}
            alt={alt}
            height={399}
            width={282}
            priority
          />
        </div>
        {hover && (
          <div className={styles.buttonWrapper}>
            <Button
              label="ADD TO CART"
              buttonType="primary"
              style={{ width: "100%" }}
              onClick={() =>
                modal ? dispatch(addCart(product)) : addtoCartHandelr()
              }
            />
          </div>
        )}
      </div>

      <div className={styles.productInfoWrapper}>
        <a className={styles.categoryText}>{category}</a>
        <a className={styles.productTitle}>{name}</a>
        <a className={styles.price}>${price}</a>
      </div>
    </div>
  );
};

export default Card;
