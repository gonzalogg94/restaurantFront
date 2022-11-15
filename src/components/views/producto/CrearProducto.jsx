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
                <Form.Label>Nombre Del Producto</Form.Label>
                <Form.Control type="text" placeholder="nombre del Producto" required minLength={2} maxLength={100}/>
                <Form.Text className="text-warning">
                  Error de Validacion
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="estado..." required minLength={2} maxLength={100}/>
                <Form.Text className="text-warning">
                  Error de Validacion
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Ingrese un monto" required min={1} max={50000} />
                <Form.Text className="text-warning">
                  Error de Validacion
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Detalle</Form.Label>
                <Form.Control type="text" placeholder="Detalle"  required minLength={2} maxLength={500}/>
                <Form.Text className="text-warning">
                  Error de Validacion
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Group className="mb-3" controlId="formPrecio">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Select required>
                    <option value="">Seleccione una opcion</option>
                    <option value="pasta">Bebida caliente</option>
                    <option value="parrilada">Bebida fria</option>
                    <option value="postre">Dulce</option>
                    <option value="vino">Salado</option>
                  </Form.Select>
  
                  <Form.Text className="text-warning">
                    Error de Validacion
                  </Form.Text>
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" placeholder="ingrese una url" required minLength={2} maxLength={200}/>
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

export default CrearProducto;