import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

interface CardProp {
  product: Product;
}

const ProductCard = ({ product }: CardProp) => {
  return (
    <Link to={`/products/${product.id}`} state={{ product }}>
      <div className="flex flex-col border p-2 gap-2 hover:cursor-pointer min-h-80">
        <img
          src={product.thumbnail}
          alt={`${product.title} thumbnail`}
          className="min-h-40 max-h-40 object-cover object-center"
        />
        <div className="flex flex-col justify-between h-full gap-4 flex-grow">
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-800">
            {product.title}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg md:text-xl lg:text-2xl">{`$${product.price}`}</p>
            <div className="flex gap-2">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                    fill="#ffce31"
                  ></path>
                </g>
              </svg>
              <p>{product.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
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
  if (error)
    return (
      <div className="flex-grow flex flex-col justify-center items-center">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M158.883 171.858C157.302 163.63 157.661 155.331 157.661 147.001"
              stroke="#000000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M243.182 168.082C244.769 160.655 243.182 152.692 243.182 145"
              stroke="#000000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M149 263C175.051 221.917 226.044 220.551 255 257.987"
              stroke="#000000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <p>A network error was encountered</p>
        <Link to="/">
          <button className="border rounded-lg px-6 py-3 bg-slate-300">
            Try Again!
          </button>
        </Link>
      </div>
    );

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
