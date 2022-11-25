import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import ListaPedidos from "./ListaPedidos";

const CardPedidos = (props) => {
    
  console.log(props.pedidos.detallePedido.length)
  return (

    <Card className="bg-success text-light m-3" style={{ width: "18rem" }}>
      <Card.Header>ID:{props.pedidos._id}</Card.Header>
      <Card.Body>
        <Card.Title className="mb-2">Gerald the Ribia</Card.Title>
        <Card.Text>{props.pedidos.detallePedido.map((pedido)=><ListaPedidos key={pedido._id} pedidos={props.pedidos}/>)}</Card.Text>
        <Card.Text>Estado: {props.pedidos.estado}</Card.Text>
        <Card.Text>Costo Total: ${props.pedidos.costoTotal}</Card.Text>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-outline-warning"size="sm" to={`/administrador/pedidosAdmin/editarPedido/${props.pedidos._id}`} >
            Modificar
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPedidos;
