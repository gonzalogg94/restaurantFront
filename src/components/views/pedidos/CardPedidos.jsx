import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
          <Button variant="outline-warning" size="sm">
            Warning
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPedidos;
