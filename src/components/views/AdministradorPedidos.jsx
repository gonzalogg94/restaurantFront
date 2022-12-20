import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { consultarPedidosApi } from "../helpers/queries";
import CardPedido from "./pedidos/CardPedido";
import { Link } from "react-router-dom";

const AdministradorPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    consultarPedidosApi().then((respuesta) => {
      setPedidos(respuesta);
      console.log(respuesta);
    });
  }, []);
  const onClickPendiente = () => {
    console.log("desde la funcion pendiente");
    consultarPedidosApi().then((respuesta) => {
      setPedidos(respuesta.filter((pedido) => pedido.estado === "Pendiente"));
    });
  };
  const onClickEntregado = () => {
    console.log("desde la funcion pendiente");
    consultarPedidosApi().then((respuesta) => {
      setPedidos(respuesta.filter((pedido) => pedido.estado === "Entregado"));
    });
  };
  const onClickCancelado = () => {
    console.log("desde la funcion pendiente");
    consultarPedidosApi().then((respuesta) => {
      setPedidos(respuesta.filter((pedido) => pedido.estado === "Cancelado"));
    });
  };
  return (
    <section className="colorFondo fuente">
      <Container>
        <h2 className="text-white text-center py-3 m-0 display-3">
          Lista de Pedidos de Productos
        </h2>
        <div className="d-flex justify-content-around">
          <Button
            onClick={onClickPendiente}
            className="btn btn-success fs-5 m-5"
            size="sm"
            type="button"
          >
            Pendientes
          </Button>
          <Button
            onClick={onClickEntregado}
            className="btn btn-success fs-5 m-5"
            size="sm"
            type="button"
          >
            Entregados
          </Button>
          <Button
            onClick={onClickCancelado}
            className="btn btn-success fs-5 m-5"
            size="sm"
            type="button"
          >
            Cancelados
          </Button>
        </div>
        <Link
          className="btn btn-success fs-5"
          to="/administrador/pedidosAdmin/creadPed"
        >
          Tomar Pedido
        </Link>
        <div className="row justify-content-center">
          {pedidos.map((pedidos) => (
            <CardPedido key={pedidos._id} pedidos={pedidos} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default AdministradorPedidos;
