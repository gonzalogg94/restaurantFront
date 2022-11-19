import { Card,Col,Badge,Row } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Card className="container my-5 mainSection py-5">
        <Row className="w-75">
          <Col md={5}>
            <img src="https://www.lanacion.com.ar/resizer/YwJjC66xmnez5NY25Nm_6x_kNWA=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3I7EMRO7BBSBGC3TULJSQZG5Q.jpg" alt="producto" className="w-100" />
          </Col>
          <Col md={5} className="py-3">
            <h3>Nombre Producto</h3>
            <hr />
            <Badge bg="success">Categoria del producto</Badge>
            <div>
            <p className="mt-3">
              <b>Precio: $200</b>
            </p>
            </div>
            <div>
                <h4>Descripcion</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ducimus ut quidem non veniam officiis velit repudiandae quo tempora distinctio.</p>
            </div>
          </Col>
        </Row>
      </Card>
    );
};

export default DetalleProducto;