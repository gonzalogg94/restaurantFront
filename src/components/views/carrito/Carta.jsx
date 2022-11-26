import React, {useState} from 'react';
import './carritoEstilo.css';
import Products from './Products';
import Cart from './Cart-borrador';

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
      <div>
      <Cart cart={cart} removeFromCart={removeFromCart}></Cart> 
      <Products addToCart={addToCart} ></Products>
   
    </div>
    </div>
  );
}

export default Carta;
