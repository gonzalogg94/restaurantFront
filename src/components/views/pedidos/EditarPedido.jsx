import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editarPedidoApi, obtenerPedidoApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarPedido = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerPedidoApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombreClientePedido", respuesta.dato.nombreClientePedido);
        setValue("estado", respuesta.dato.estado);
        setValue("detallePedido", respuesta.dato.detallePedido);
        setValue("costoTotal", respuesta.dato.costoTotal);
      }
    });
  }, []);
  const navegacion = useNavigate();

  const onSubmit = (pedido) => {
    editarPedidoApi(id, pedido).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire("Producto Actualizado", "Actualizacion Correcta", "success");
        navegacion("/administrador/pedidosAdmin");
      } else {
        Swal.fire("Error inesperado", "Intente Nuevamente", "error");
      }
    });
  };
  return (
    <section className="colorFondo">
      <Container>
        <h2 className="display-3 text-center text-white m-0 py-3 fuente">
          Modificación de Pedidos
        </h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreCliente">
            <Form.Label className="text-white fuente fs-4">Nombre Cliente</Form.Label>
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
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label className="text-white fuente fs-4">Estado</Form.Label>
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
          <Button variant="success"
          type="submit"
          className="my-3 fw-bold fs-3 fuente "
          size="lg">
            Terminar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default EditarPedido;
