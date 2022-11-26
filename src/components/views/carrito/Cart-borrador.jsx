import React from 'react'

export default function Cart({cart, removeFromCart}) {



//  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);


// const sum = cart.map(product => product.precio).reduce((a, b) => a + b)


  return (
        <>
      <h2>Tu Orden</h2>
      <div className="products">
      {cart.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img className='w-25' src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>removeFromCart(product)}>Quitar de la orden</button>
      </div> 
      ))}
      </div> 
     <div>
      
      </div> 
      </>
  );
}
