import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registro = () => {
  return (
    <section className="colorFondo fuente text-light">
      <Container className="py-5">
        <div>
          <h2 className="display-3 text-center by-3">Nuevo Usuario</h2>
          <hr />
        </div>
        <div>
          <Form className="by-3">
            <Form.Group className="mb-3" controlId="usuario.ControlInput1">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                required
                minLength={2}
                maxLength={100}
              />
              <Form.Text className="text-warning">
                Error de Validacion
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                required
                minLength={10}
                maxLength={100}
              />
              <Form.Text className="text-warning">
                Error de Validacion
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                min={8}
                max={30}
              />
              <Form.Text className="text-warning">
                Error de Validacion
              </Form.Text>
            </Form.Group>

            <Button
              variant="outline-info"
              type="submit"
              className="my-3 "
              size="lg"
            >
              Guardar
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Registro;
