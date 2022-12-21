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
    <section className="colorFondo py-3">
      <Container className="text-white">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreCliente">
            <Form.Label className="fuente fs-4">Nombre Cliente</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              {...register("nombreClientePedido", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Debe ingresar como mínimo 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Existe un máximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.nombreClientePedido?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label className="fuente fs-4">Detalle Pedido</Form.Label>
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
            <Form.Label className="fuente fs-4">Estado</Form.Label>
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
            <Form.Text className="text-warning">
              {errors.estado?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label className="fuente fs-4">Costo Total</Form.Label>
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
           variant="success"
           type="submit"
           className="my-3 fw-bold fs-3 fuente"
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
