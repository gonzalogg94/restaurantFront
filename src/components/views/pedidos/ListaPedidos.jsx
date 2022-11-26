import ListGroup from "react-bootstrap/ListGroup";

const ListaPedidos = (props) => {
  return (
    <ListGroup as="ol">
      
      <ListGroup.Item as="li" className="bg-success text-white">
        {props.pedidos.detallePedido}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ListaPedidos;
