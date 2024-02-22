import { Product } from "../types";
import { useLocation, useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Rating from "./Rating";
import { CartItem } from "../types";
import { Dispatch, SetStateAction } from "react";

interface CartProps {
  cartItems: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}
export default function ProductPage({ cartItems, setCart }: CartProps) {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.product) {
    // Handle the case where the product object is not available
    return <div>No product found</div>;
  }

  const { product } = state as { product: Product };

  function handleAddToCart(product: Product) {
    const updatedCartItems = [...cartItems, { product, quantity: 1 }];
    setCart(updatedCartItems);
  }

  function handleBuyNow(product: Product) {
    const updatedCartItems = [...cartItems, { product, quantity: 1 }];
    setCart(updatedCartItems);
    navigate("/cart");
  }

  return (
    <main className="p-6 xl:px-0 flex flex-col justify-center items-center lg:flex-row lg:gap-12">
      <ImageCarousel images={product.images} />
      <div className="my-16 lg:my-0 max-w-[570px] lg:max-w-[420px] flex flex-col gap-4">
        <h2 className="text-md md:text-lg lg:text-xl font-semibold">
          {product.title}{" "}
          <span className="text-sm font-normal italic">{product.brand}</span>
        </h2>
        <p className="italic font-light">{product.description}</p>
        <div className="flex gap-3">
          <p className="line-through">
            {`$${(
              (product.price * 100) /
              (100 - product.discountPercentage)
            ).toFixed(2)}`}{" "}
          </p>
          <p className="text-green-600">
            ({`${product.discountPercentage}% off`})
          </p>
          <p className="font-semibold text-xl">{`$${product.price}`}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p>{product.rating}</p>
          <Rating rating={product.rating} />
        </div>
        <div className="flex gap-4">
          <button
            className=" rounded-xl py-3 px-6 bg-orange-400 font-bold text-white"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
          <button
            className=" rounded-xl py-3 px-6 bg-green-800 text-white font-bold"
            onClick={() => handleBuyNow(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
