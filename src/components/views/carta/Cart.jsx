import React from 'react'
import { useCart} from "react-use-cart"

export default function Cart({cart, removeFromCart}) {

const {
  totalUniqueItems,
  cartTotal,
} = useCart();

//  if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
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
          <div className="col-auto ms-auto">
                    <h2> Total Price: {cartTotal}</h2>

                </div>
        <div>
      </div> 
      </>
  );
}

/*
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

*/