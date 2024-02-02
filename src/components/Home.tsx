import { useEffect, useState } from "react";

interface CardProp {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    brand: string;
    category: string;
    rating: number;
    stock: number;
    thumbnail: string;
    images: string[];
  };
}

const ProductCard = ({ product }: CardProp) => {
  return (
    <div className="flex flex-col border p-2">
      <img src={product.thumbnail} alt={`${product.title} thumbnail`} />
      <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{`$${product.price}`}</p>
        <p>{product.rating} / 5</p>
      </div>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-black/10 border-l-4 border-l-[#36D7B7] rounded-full w-10 h-10 animate-spin"></div>
    </div>
  );
};

const Products = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setAllProducts(response.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>A network error was encountered</p>;

  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    brand: string;
    category: string;
    rating: number;
    stock: number;
    thumbnail: string;
    images: string[];
  }

  return (
    <main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 p-6 xl:px-0">
        {allProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
