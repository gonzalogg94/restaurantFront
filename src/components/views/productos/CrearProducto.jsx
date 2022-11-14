import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CrearProducto = () => {
  return (
    <section className="colorFondo fuente text-light">
      <Container>
        <div>
          <h2 className="display-3 text-center by-3">Agregar Producto Nuevo</h2>
          <hr />
        </div>
        <div>
          <Form className="by-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="name@example.com" />
              <Form.Text className="text-warning">Error de Validacion</Form.Text>
            </Form.Group>
            <Button variant="outline-info" type="submit" className="my-3 "size="lg">
              Guardar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default CrearProducto;
