import { Container } from "react-bootstrap";
import CardPedidos from "./pedidos/CardPedidos";


const pedidosAdmin = () => {
    return (
        <section className="colorFondo">
      <Container >
        <h2 className="text-white text-center by-3 display-3">
            Lista de Pedidos de Productos
        </h2>
        <div className="row justify-content-center">
            <CardPedidos/>
        </div>
      </Container>
      </section>
    );
};

export default pedidosAdmin;