import React, {useState} from 'react';
import '../carrito/carrito.css';
import Products from '../carrito/Products';
import Cart from '../carrito/Cart';

const Carta = () => {
 const [cart, setCart] = useState([]);
  
const removeFromCart = (productToRemove) =>{
  setCart(cart.filter(product =>  product !== productToRemove))}

const addToCart = (product) =>{    
      setCart([...cart, {...product}])};

  return (
    <div className="App">  
      <header>
        
      </header>
      <Cart cart={cart} removeFromCart={removeFromCart}></Cart>  
      <Products addToCart={addToCart} ></Products>

    </div>
  );
}

export default Carta;
