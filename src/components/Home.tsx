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
    <div className="flex flex-col border p-2 gap-2 hover:cursor-pointer">
      <img
        src={product.thumbnail}
        alt={`${product.title} thumbnail`}
        className="min-h-40 max-h-40 object-cover object-center"
      />
      <div className="flex flex-col justify-between h-full gap-4">
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-800">
          {product.title}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-lg md:text-xl lg:text-2xl">{`$${product.price}`}</p>
          <p>{product.rating}</p>
        </div>
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
    fetch("https://dummyjson.com/products?limit=100", { mode: "cors" })
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
      <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 p-6 xl:px-0">
        {allProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
