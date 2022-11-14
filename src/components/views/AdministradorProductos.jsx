import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const AdministradorProductos = () => {
  return (
    <Container>
      <div>
        <h2 className="display-3 text-center my-2">Administrador de Productos</h2>
        <hr />
      </div>
      <div>
        <div className="d-flex justify-content-around  my-3">
          <h3>Listado de Productos</h3>
          <Button variant="outline-primary">Agregar</Button>
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
           
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdministradorProductos;
