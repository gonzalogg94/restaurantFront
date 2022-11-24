import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

const FormPedidos = () => {
    const{register,handleSubmit,formState:{errors}}= useForm();

    const onSubmit =(datos)=>{
        console.log(datos);
        console.log("desde nuestro evento onsubmit");
    }
    return (
      <section className="colorFondo">
        <Container>
            <h2 className="display-3 text-center text-white">Modificacion de Pedidos</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              {...register("estado", {
                required: "Debe seleccionar una Estado",
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Entregado">Entregado</option>
              <option value="Cancelado">Cancelado</option>
             
             
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.estado?.message}
            </Form.Text>
          </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Container>
      </section>
    );
};

export default FormPedidos;