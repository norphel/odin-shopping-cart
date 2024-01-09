import { useState } from "react";

import Header from "./components/Header";
import Products from "./components/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header numberOfItemsInCart={cartItems.length} />
      <Products />
    </>
  );
}

export default App;
