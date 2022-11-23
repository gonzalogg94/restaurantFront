import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPedidos = () => {
  return (
    <Card className="bg-success text-light" style={{ width: "18rem" }}>
      <Card.Header>ID:xxxxxx</Card.Header>
      <Card.Body>
        <Card.Title className="mb-2">Gerald the Ribia</Card.Title>
        <Card.Text>Detalle Pedido......</Card.Text>
        <Card.Text>Estado:bvcnvbn</Card.Text>
        <Card.Text>Costo Total</Card.Text>
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
