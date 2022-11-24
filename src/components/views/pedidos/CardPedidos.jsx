import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const CardPedidos = (props) => {
    
  
  return (
    <Card className="bg-success text-light m-3" style={{ width: "18rem" }}>
      <Card.Header>ID:{props.pedidos._id}</Card.Header>
      <Card.Body>
        <Card.Title className="mb-2">Gerald the Ribia</Card.Title>
        <Card.Text>{props.pedidos.detallePedido}</Card.Text>
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