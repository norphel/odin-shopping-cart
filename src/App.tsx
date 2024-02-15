import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header numberOfItemsInCart={cart.length} />
      <Outlet />
    </>
  );
}

export default App;
