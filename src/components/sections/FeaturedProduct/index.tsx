import React, { useState } from "react";
import Image from "next/image";
import styles from "./FeaturedProduct.module.css";
import Button from "src/components/ui/Button";
import featuredImage from "public/images/featuredProduct.png";
import { useDispatch, useSelector } from "react-redux";
import { modalCart } from "src/store/testReducer";
import { addCart } from "src/store/cartReducer";
import { RootState } from "src/store";

// const discription =
//   " So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.";

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const FeaturedProduct = () => {
  const featuredProduct = useSelector(
    (state: any) => state.product.featuredProduct
  );
  const { image, name, details, category, recommendations } = featuredProduct;
  const { dimmentions, description, size } = details;
  const dispatch = useDispatch();

  const openModalHandle = () => {
    dispatch(addCart(featuredProduct));
    dispatch(modalCart());
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a className={styles.featureTitle}>{name}</a>
        <Button
          onClick={() => openModalHandle()}
          buttonType="primary"
          label=" ADD TO CART"
          className={styles.cartButton}
        />
      </div>
      <div className={styles.featureImageWrapper}>
        <Image
          placeholder="blur"
          loader={myLoader}
          onLoadingComplete={() => myLoader}
          alt="Bejamas-featuredProduct"
          blurDataURL={`${featuredImage}`}
          src={
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          }
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.featureTagWrapper}>
          <a> Photo of the day</a>
        </div>
      </div>
      <Button
        onClick={() => openModalHandle()}
        buttonType="primary"
        label=" ADD TO CART"
        className={styles.cartButtonMobile}
      />
      <div className={styles.descriptionSectionWrapper}>
        <div className={styles.featureDescriptionWrapper}>
          <h3 className={styles.featureTitle}>About the {name}</h3>
          <a className={styles.categoryName}>{category}</a>
          <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.featureRecommandationWrapper}>
          <h3 className={styles.recommendationTitle}>People also buy</h3>
          <div className={styles.recomendationImagesWrap}>
            <Image src={"/images/pic1.png"} height={147} width={117} />
            <Image src={"/images/pic2.png"} height={147} width={117} />
            <Image src={"/images/pic3.png"} height={147} width={117} />
          </div>
          <div className={styles.recomendationDetailsWrapper}>
            <a className={styles.detailsSizeTitle}>Details</a>
            <p className={styles.sizes}>
              Size:{dimmentions.height}x{dimmentions.width} pixel
            </p>
            <p className={styles.sizes}>Size: {size} ms </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
