import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPedidoApi } from "../../helpers/queries";

const AgregarPedido = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde el evento onsubmit");
    crearPedidoApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire("Pedido Creado", "Creado Con Exito", "success");
        navegacion("/administrador/pedidosAdmin");
      } else {
        Swal.fire("Error", "No se pudo Crear ", "error");
      }
    });
  };
  const navegacion = useNavigate();
  return (
    <section className="colorFondo fuente">
    <Container className="text-white">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>detalle Pedido</Form.Label>
          <Form.Control
            minLength={2}
            maxLength={50}
            type="Array"
            placeholder="Productos"
            {...register("detallePedido", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Caracteres Mínimos 2",
              },
              maxLength: {
                value: 50,
                message: "Caracteres máximos 50",
              },
            })}
          />
          <Form.Text className="text-warning">
            {errors.detallePedido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                {...register("estado", {
                  required: "Debe seleccionar una Estado",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value="Pendiente" >Pendiente</option>
                <option value="Entregado" >Entregado</option>
                <option value="Cancelado">Cancelado</option>
              </Form.Select>
              <Form.Text className="text-warning">
                {errors.estado?.message}
              </Form.Text>
            </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Costo Total</Form.Label>
          <Form.Control
            min={1}
            max={20000}
            type="number"
            placeholder="Ingrese el Precio"
            {...register("costoTotal", {
              required: "El campo es obligatorio",
              min: {
                value: 1,
                message: "El precio debe ser igual o mayor a $1",
              },
              max: {
                value: 20000,
                message: "El precio debe ser igual o menor a $20.000",
              },
            })}
          />
          <Form.Text className="text-warning">
            {errors.detallePedido?.message}
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
    </Container>
    </section>
  );
};

export default AgregarPedido;
