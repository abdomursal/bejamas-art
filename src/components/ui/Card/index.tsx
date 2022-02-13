import Image from "next/image";
import React, { useState } from "react";
import styles from "./Card.module.css";
import { CardProps } from "src/types/components/ui/Card";
import Button from "../Button";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";
import { addCart } from "src/store/cartReducer";
import { modalCart } from "src/store/testReducer";
import featuredImage from "public/images/featuredProduct.png";

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
  const modal = useSelector((state : any)=> state.modal.modalCart)
  
  const dispatch = useDispatch();
  const addtoCartHandelr = () => {
    dispatch(addCart(product));
    dispatch(modalCart());
  };

  return (
    <div className={styles.container}>
      {/* this section is the item image with addCart button */}
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
            placeholder="blur"
            blurDataURL={`${featuredImage}`}

          />
        </div>
        {hover && (
          <div className={styles.buttonWrapper}>
            <Button
              label="ADD TO CART"
              buttonType="primary"
              style={{ width: "100%" }}
              onClick={() => modal? dispatch(addCart(product)): addtoCartHandelr()}
            />
          </div>
        )}
      </div>

      {/* below is the information section/ */}

      <div className={styles.productInfoWrapper}>
        <a className={styles.categoryText}>{category}</a>
        <a className={styles.productTitle}>{name}</a>
        <a className={styles.price}>${price}</a>
      </div>
    </div>
  );
};

export default Card;
