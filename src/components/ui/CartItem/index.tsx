import Image from 'next/image';
import React from 'react';
import { CardItemProps } from 'src/types/components/ui/CardItem';
import styles from './CartItem.module.css'

const CartItem = ({ name, price, image }: CardItemProps) => {
  const {src,alt} = image
  return (
    <div className={styles.container}>
      <div className={styles.InfoSectionWrapper}>
        <a className={styles.title}>{name}</a>
        <a className={styles.price}>${price}</a>
      </div>
      <div className={styles.imageWrapper}> 
        <Image src={src} height={90} width={149} alt={alt}/>
      </div>
    </div>
  )
};

export default CartItem;
