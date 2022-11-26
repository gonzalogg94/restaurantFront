import React, { useEffect, useState } from 'react'
import { consultarApi } from '../../helpers/queries';
import {useCart} from "react-use-cart"


const Home = () => {
 const {addItem} = useCart();

const [producto, setProductos] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setProductos(respuesta)
})
},[])


    return (
        <>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {producto.map((producto)=>{
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={producto._id}> 
                            <div class="card p-0 overflow-hidden h-100 shadow">
                            <img src={producto.imagen} class="card-img-top img-fluid" />
                            <div class="card-body text-center">
                            <h5 class="card-title">{producto.nombreProducto}</h5>
                            <h5 class="card-title">${producto.precio}</h5>
                            <button href="#" class="btn btn-success" onClick={()=>addItem(producto._id)}>Add to Cart</button>
                            </div>
                            </div>
                        </div>
                         );
                     })}
                </div>
            </section>
        </>
    );
};

export default Home;