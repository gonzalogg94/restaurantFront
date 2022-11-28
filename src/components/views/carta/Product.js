import React from 'react'
import './StyleCarta.css'

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div className="col-12 col-md-6 col-lg-4 border">
        <div className="text-center">
        <img className="small" src={product.imagen} alt={product.nombreProducto}></img>
        
        <h3>{product.nombreProducto}</h3>
        <div>${product.precio}</div>
    <button  onClick={()=>onAdd(product)}>Agregar a la orden</button>
    </div>
    </div>
    
  )
}

