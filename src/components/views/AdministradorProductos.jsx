import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./productos/ItemProducto";

const AdministradorProductos = () => {
  return (
    <section className="colorFondo fuente">
      <Container>
        <div>
          <h2 className="display-3 text-center my-2 text-light">
            Administrador de Productos
          </h2>
          <hr />
        </div>
        <div className="table-responsive">
          <div className="d-flex justify-content-around  my-3 text-light">
            <h3>Listado de Productos</h3>
            <Button variant="outline-info">Agregar</Button>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Codigo</th>
                <th> nombreProducto</th>
                <th> estado</th>
                <th> precio</th>
                <th> detalle</th>
                <th> categoria</th>
                <th> imagen</th>
              </tr>
            </thead>
            <tbody>
              <ItemProducto />
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default AdministradorProductos;
