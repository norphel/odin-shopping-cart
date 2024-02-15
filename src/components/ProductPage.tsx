import { Product } from "../types";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const { state } = useLocation();

  if (!state || !state.product) {
    // Handle the case where the product object is not available
    return <div>No product found</div>;
  }

  const { product } = state as { product: Product };
  return (
    <>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={`image of ${product.title}`} />
    </>
  );
}
