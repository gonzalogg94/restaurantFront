import CardProducto from "../producto/CardProducto";
import { consultarApi } from "../../helpers/queries";
import { useEffect, useState } from "react";

const MenuPostres = () => {
    const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      console.log(respuesta);
      setProductos(
        respuesta.filter((producto) => producto.categoria === "Postre")
      );
    });
  }, []);
    return (
        <section className="text-center mt-5 container">
        <div className="text-white">
          <h2>Nuestros Postres</h2>
          <hr />
        </div>
        <article className="row justify-content-center container-fluid">
          {productos.map((producto) => (
            <CardProducto key={producto._id} producto={producto}></CardProducto>
          ))}
        </article>
      </section>
    );
};

export default MenuPostres;