import React from 'react';
import Image from 'next/image';
import styles from './IconCart.module.css'
import { IconCartProps } from 'src/types/components/ui/IconCart';

const IconCart = ({showNotification, itemsCount, onClick, ...props}: IconCartProps) => {
  return (
  <div className={styles.container} onClick={onClick} {...props}>
    <div className={styles.imageIcon}>
    <Image src={'/images/cart.png'} height={54} width={54} />
    </div>
    {showNotification && 
    <div className={styles.counterBox}>
      <div className={styles.counterTextWrap}>
      <a className={styles.counterText}>{itemsCount}</a>
      </div>
    </div>
}
  </div>)
};

export default IconCart;
