import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import TablaPedido from "./TablaPedido";
import { useEffect, useState } from "react";
import { consultarPedidosApi } from "../../helpers/queries";

const AdministradorPedidos = () => {
  const titularCarro = JSON.parse(localStorage.getItem("tokenCliente"));
  const clienteCarro = titularCarro.nombreCliente + " " + titularCarro.apellido;
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    consultarPedidosApi().then((respuesta) => {
      setPedidos(
        respuesta.filter(
          (pedido) => pedido.nombreClientePedido === clienteCarro
        )
      );
    });
  }, []);

  return (
    <section className="colorFondo fuente">
      <Container>
        <div>
          <h2 className="display-3 text-center py-5 m-0 text-light">
            Mis Pedidos
          </h2>
          <hr />
        </div>
        <div className="table-responsive">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Código</th>
                <th> Detalle Pedido</th>
                <th> Estado</th>
                <th> Precio Total</th>
                <th> Cliente</th>
                <th> Administrar</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <TablaPedido
                  key={pedido._id}
                  pedido={pedido}
                  setPedidos={setPedidos}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default AdministradorPedidos;
