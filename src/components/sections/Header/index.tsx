import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import IconCart from "src/components/ui/IconCart";
import { useDispatch } from "react-redux";
import { modalCart } from "src/store/testReducer";
import { useAppSelector } from "src/store/hooks";


const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);
  const length = cartItems.length;

  
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
      <Image src={"/images/logo.png"} height={25} width={159} />
      </div>
      <div className={styles.mobileLogo}>
      <IconCart
        showNotification={length >= 1 ? true : false}
        itemsCount={length >= 1 ? length : null}
        onClick={() => dispatch(modalCart())}
        />
        </div>
    </header>
  );
};

export default Header;
