import { Product } from "./types";
interface CartItem {
  product: Product;
  quantity: number;
}
interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {};

export default Cart;
