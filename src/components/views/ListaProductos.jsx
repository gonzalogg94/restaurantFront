import React from "react";


const ListaProductos = () => {
  return (
    <section className="fuente colorFondo">
      
        <section className="row">
        <section class="col-lg-2 col-md-2 fondoLateral esconder">
          <div class="sidebar d-none d-md-grid col-md-2 col-lg-2 text-light">
            <ul class="list-group mt-5">
              <li class="list-group-item listSidebar">
                <a href="#limpieza">Pastas</a>
              </li>
              <li class="list-group-item listSidebar">
                <a href="#bebidas">Parilla</a>
              </li>
              <li class="list-group-item listSidebar">
                <a href="#lacteos">Vinos</a>
              </li>
              <li class="list-group-item listSidebar">
                <a href="#electronica">Postres</a>
              </li>
            </ul>
          </div>
      </section>
      <section className="col-lg-10 col-md-10 col-sm-12 mx-0 px-0">
      <div className="text-center text-white py-5 container">
          <h1> Nuestro Menu</h1>
          <hr/>
        </div>
      </section>
        </section>
    </section>
  );
};

export default ListaProductos;
