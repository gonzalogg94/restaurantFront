import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from  "./Home"
import Cart from "../carta/Cart"
import { CartProvider} from "react-use-cart"



function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider> 
    </>
  
  );
}

export default App;
