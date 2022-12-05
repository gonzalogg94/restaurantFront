import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
  
    return (
      <section className="colorFondo fuente">
        <Container>
          
          <h2 className="text-white text-center py-3 m-0 display-3">
            Lista de Pedidos de Productos
          </h2>
          
          <Link className="btn btn-success fs-5" to='/administrador/pedidosAdmin/creadPed'>Tomar Pedido</Link>
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