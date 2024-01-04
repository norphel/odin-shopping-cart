import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);
  return (
    <>
      <Header numberOfItemsInCart={numberOfItemsInCart} />
    </>
  );
}

export default App;
