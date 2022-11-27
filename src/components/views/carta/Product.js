import React from 'react'
import './StyleCarta.css'

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
        <img className="small" src={product.imagen} alt={product.nombreProducto}></img>
        <h3>{product.nombreProducto}</h3>
        <div>${product.precio}</div>
    <button  onClick={()=>onAdd(product)}>Agregar a la orden</button>
    </div>
    
  )
}

