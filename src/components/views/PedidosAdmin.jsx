import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { consultarPedidosApi } from "../helpers/queries";
import CardPedidos from "./pedidos/CardPedidos";

const PedidosAdmin = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    consultarPedidosApi().then((respuesta) => {
      setPedidos(respuesta);
      console.log(respuesta);
    });
  }, []);

  return (
    <section className="colorFondo">
      <Container>
        <h2 className="text-white text-center by-3 display-3">
          Lista de Pedidos de Productos
        </h2>
        <div className="row justify-content-center">
          {pedidos.map((pedidos) => (
            <CardPedidos key={pedidos._id} pedidos={pedidos} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PedidosAdmin;
