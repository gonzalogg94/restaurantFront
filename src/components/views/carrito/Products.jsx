import React, { useEffect, useState } from 'react'
import { consultarApi } from '../../helpers/queries';

export default function Products({addToCart}) {

const [products, setProducts] = useState([]);
useEffect  (()=>{

consultarApi().then((respuesta)=>{
console.log(respuesta)
setProducts(respuesta)
})
},[])

  return (
  <>
      <h2>Nuestra Carta</h2>
      <div className="products">
      {products.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
)
}

/*
import React, { useEffect, useState } from 'react'
import { consultarApi } from '../../helpers/queries';

export default function Products({addToCart}) {

const [products, setProducts] = useState([]);
useEffect  (()=>{

consultarApi().then((respuesta)=>{
console.log(respuesta)
setProducts(respuesta)
})
},[])

  return (
  <>
      <h2>Nuestra Carta</h2>
      <div className="products">
      {products.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
)
}
*/
