import React, { useEffect, useState } from 'react'
import  Itemcard from "./Itemcard"
import { consultarApi } from '../../helpers/queries';


const Home = () => {


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
                    {producto.map((producto, _id)=>{
                    return (
                    <Itemcard 
                        img={producto.imagen} 
                        title={producto.nombreProducto} 
                        price={producto.precio}  
                        item={producto}
                        key={_id}
                                               
                     />
                     )
                })}

                       

                </div>
            </section>
        </>
    );
};

export default Home;