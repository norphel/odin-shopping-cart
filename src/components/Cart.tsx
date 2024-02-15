import { CartItem } from "../types";
import { Dispatch, SetStateAction } from "react";

interface CartProps {
  cartItems: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <>
      <h2>Cart</h2>
      {cartItems.map((item) => {
        <h2>{item.product.title}</h2>;
      })}
    </>
  );
};

export default Cart;
