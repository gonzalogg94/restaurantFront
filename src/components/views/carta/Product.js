import React from 'react'

export default function Product(props) {
    const {product} = props;
  return (
    <div>
        <img className="small" src={product.imagen} alt={product.nombreProducto}></img>
        <h3>{product.nombreProducto}</h3>
        <div>${product.precio}</div>
    <button> Add to Cart </button>
    </div>
    
  )
}

