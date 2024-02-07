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

export default function ProductPage({ product }: CardProp) {
  return (
    <>
      <h2>{product.title}</h2>
    </>
  );
}
