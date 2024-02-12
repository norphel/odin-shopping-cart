import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header numberOfItemsInCart={cartItems.length} />
      <Outlet />
    </>
  );
}

export default App;
