import React from 'react'

export default function Cart({cart, removeFromCart}) {
  return (
        <>
      <h2>Tu Orden</h2>
      <div className="products">
      {cart.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>removeFromCart(product)}>Remove</button>
      </div> 
      ))}
      </div>  
      </>
  );
}
