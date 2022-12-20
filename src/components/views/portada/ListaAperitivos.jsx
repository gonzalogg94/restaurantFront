import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { consultarApi } from "../../helpers/queries";
import CardProducto from "../../views/producto/CardProducto";
import Spinner from "../../common/Spinner";

const ListaAperitivos = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarApi().then((respuesta) => {
      console.log(respuesta);
      setProductos(
        respuesta.filter(
          (producto) =>
            producto.categoria === "Aperitivo" &&
            producto.estado === "Disponible"
        )
      );
      setMostrarSpinner(false);
    });
  }, []);

  const mostrarComponente =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      productos.map((producto) => (
        <CardProducto key={producto._id} producto={producto}></CardProducto>
      ))
    );

  return (
    <section className="fuente colorFondo container-fluid">
      <div className="posicionBadge position-fixed"></div>
      <article className="row">
        <aside class="col-lg-2 col-md-2 fondoLateral esconder container-fluid">
          <div class="sidebar d-none d-md-grid col-md-2 col-lg-2 text-light">
            <ul class="list-group mt-5">
              <Link className="text-decoration-none" to={"/entradas"}>
                <li class="list-group-item listSidebar">
                  <a href="#Entradas">Entradas</a>
                </li>
              </Link>
              <Link className="text-decoration-none" to={"/platos-principales"}>
                <li class="list-group-item listSidebar">
                  <a href="#PlatoPrincipal">Platos Principales</a>
                </li>
              </Link>
              <Link className="text-decoration-none" to={"/postres"}>
                <li class="list-group-item listSidebar">
                  <a href="#Postres">Postres</a>
                </li>
              </Link>
              <Link className="text-decoration-none" to={"/bebidas"}>
                <li class="list-group-item listSidebar">
                  <a href="#postres">Bebidas</a>
                </li>
              </Link>
              <Link className="text-decoration-none d-none" to={"/aperitivos"}>
                <li class="list-group-item listSidebar">
                  <a href="#postres">Aperitivos</a>
                </li>
              </Link>
            </ul>
          </div>
        </aside>
        <aside className="col-lg-10 col-md-10 col-sm-12 container-fluid">
          <div className="text-center text-white py-5 container">
            <h1> Nuestros Aperitivos</h1>
            <hr />
          </div>
          <article className="row my-5 justify-content-center container-fluid">
            {mostrarComponente}
          </article>
        </aside>
      </article>
    </section>
  );
};

export default ListaAperitivos;
