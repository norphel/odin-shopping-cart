import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartItem } from "./types";

import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <>
      <BrowserRouter>
        <Header numberOfItemsInCart={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path={"/products/:product_id"} element={<ProductPage />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} setCart={setCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
