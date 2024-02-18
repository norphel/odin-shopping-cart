import { Product } from "../types";
import { useLocation } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

export default function ProductPage() {
  const { state } = useLocation();

  if (!state || !state.product) {
    // Handle the case where the product object is not available
    return <div>No product found</div>;
  }

  const { product } = state as { product: Product };
  console.log(product.images);
  return (
    <main>
      <ImageCarousel images={product.images} />
    </main>
  );
}
