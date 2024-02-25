import { CartItem } from "../types";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface CartProps {
  cartItems: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const Cart = ({ cartItems }: CartProps) => {
  let orderTotal = 0;
  cartItems.forEach((item) => {
    orderTotal += item.product.price * item.quantity;
  });
  let shippingCharges = 0;
  if (orderTotal < 100) shippingCharges = 0.5 * orderTotal;
  return (
    <main className="flex flex-col justify-center items-center gap-8 py-6 p-6 xl:px-0">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">My Cart</h2>
      {cartItems.length > 0 ? (
        <div className="relative">
          <div className="grid grid-cols-4 md:grid-cols-5 gap-x-1 mb-2 justify-items-center font-semibold text-lg">
            <p className="hidden md:block"></p>
            <p>Item</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          <hr />
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="grid grid-cols-4 md:grid-cols-5 gap-2 items-center mt-2 justify-items-center"
            >
              <img
                src={item.product.thumbnail}
                alt="product thumbnail"
                className="hidden md:block max-h-24 min-h-24 object-contain"
              />
              <p className="justify-self-start md:justify-self-center">
                {item.product.title}
              </p>
              <p>${item.product.price}</p>
              <p>{item.quantity}</p>
              <p>${item.quantity * item.product.price}</p>
            </div>
          ))}
          <div className="grid grid-cols-2 max-w-96 md:max-w-[420px] gap-x-3 gap-y-1 absolute right-0">
            <p className="font-semibold">Order Total:</p>
            <p>${orderTotal}</p>
            <p className="font-semibold">Shipping Charges:</p>
            <p>${shippingCharges}</p>
            <p className="font-semibold">Total:</p>
            <p className="font-semibold">${orderTotal + shippingCharges}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-lg">Your cart is Empty!</h2>
          <Link to="/products">
            <button className="p-3 rounded-2xl bg-orange-300 text-orange-950 font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Cart;
