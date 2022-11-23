import React from 'react';
import CardProducto from '../producto/CardProducto';
import { consultarApi } from '../../helpers/queries';
import { useEffect, useState } from "react";


const MenuEntradas = () => {
    const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      console.log(respuesta);
      setProductos(
        respuesta.filter((producto) => producto.categoria === "Entrada")
      );
    });
  }, []);
    return (
        <section className='text-center mt-5 container'>
            <div className='text-white'>
                <h2>Menu Entradas</h2>
                <hr />
            </div>
        <article className="row my-5 justify-content-center container-fluid">
        {productos.map((producto) => (
            <CardProducto
            key={producto._id}
            producto={producto}
            ></CardProducto>
            ))}
      </article>
            </section>
    );
};

export default MenuEntradas;