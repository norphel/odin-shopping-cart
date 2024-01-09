import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <p>{product.title}</p>
    </>
  );
};
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
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

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <main>
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Products;
