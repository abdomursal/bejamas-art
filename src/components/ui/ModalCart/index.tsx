import Image from "next/image";
import React from "react";
import { CardItemProps } from "src/types/components/ui/CardItem";
import { ModalCartProps } from "src/types/components/ui/ModalCart";
import Button from "src/components/ui/Button";
import CartItem from "src/components/ui/CartItem";
import style from "./ModalCart.module.css";
import { useDispatch } from "react-redux";
import { modalCart } from "src/store/testReducer";
import {clearCart} from 'src/store/cartReducer'
const ModalCart = ({ items }: ModalCartProps) => {
  const dispatch = useDispatch();

  const clearCartHandle = () => {
    dispatch(modalCart());
    dispatch(clearCart());
  };


  return (
    <div className={style.container}>
      <div className={style.modalWrapper}>
        <div className={style.exitButtonWrapper}>
          <div
            className={style.exitImage}
            onClick={() => dispatch(modalCart())}
          >
            <div className={style.imageWrapper}>
            <Image src={"/images/exit.png"} height={18} width={18} />
            </div>
          </div>
        </div>
        {items?.map((item: CardItemProps, index: number) => {
          const { name, image, price } = item;
          return (
            <div className={style.productItemWrapper} key={index}>
              <CartItem name={name} price={price} image={image}  />
            </div>
          );
        })}
        <Button
          label="CLEAR"
          buttonType="secondary"
          className={style.button}
          onClick={() => clearCartHandle()}
        />
      </div>
    </div>
  );
};

export default ModalCart;
