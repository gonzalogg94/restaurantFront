import React, { useEffect, useState } from 'react'
import { consultarApi } from '../../helpers/queries';

export default function Products({addToCart}) {


const [entrada, setEntrada] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setEntrada(respuesta.filter((producto) => producto.categoria === 'Entrada'))
})
},[])


const [platoPrincipal, setPlatoPrincipal] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setPlatoPrincipal(respuesta.filter((producto) => producto.categoria === 'Plato principal'))
})
},[])

const [postre, setPostre] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setPostre(respuesta.filter((producto) => producto.categoria === 'Postre'))
})
},[])

const [bebida, setBebida] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setBebida(respuesta.filter((producto) => producto.categoria === 'Bebida'))
})
},[])

const [aperitivo, setAperitivo] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setAperitivo(respuesta.filter((producto) => producto.categoria === 'Aperitivo'))
})
},[])

  return (
    <div>
  <>
      <h2>Entradas</h2>
      <div className="products">
      {entrada.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
  <>
      <h2>Platos principales</h2>
      <div className="products">
      {platoPrincipal.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
  <>
      <h2>Postres</h2>
      <div className="products">
      {postre.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
  <>
      <h2>Bebidas</h2>
      <div className="products">
      {bebida.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
  <>
      <h2>Aperitivos</h2>
      <div className="products">
      {aperitivo.map((product) => (
      <div className="product" key={product._id}>
        <h3>{product.nombreProducto}</h3>
        <h4>${product.precio}</h4>
        <img src={product.imagen} alt={product.nombreProducto}/>
        <button onClick={()=>addToCart(product)}>Agregar a la orden</button>
      </div> 
      ))}
      </div>  
  </>
  </div>
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
