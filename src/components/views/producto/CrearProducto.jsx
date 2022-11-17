import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { crearProductoApi } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde el evento onsubmit");
    crearProductoApi(datos).then((respuesta)=>{
      if(respuesta.status===201){
        Swal.fire("Producto Creado","Creado Con Exito","success");
      }else{
        Swal.fire("Error","No se pudo Crear ","error");
      }
    })
  };

  return (
    <section className="colorFondo fuente text-light">
      <Container>
        <h2 className="display-3 text-center by-3">Agregar Producto Nuevo</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Nombre producto</Form.Label>
            <Form.Control
              minLength={2}
              maxLength={100}
              type="text"
              placeholder="Nombre del Producto"
              {...register("nombreProducto", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Caracteres Minimos 2",
                },
                maxLength: {
                  value: 100,
                  message: "Caracteres maximos 100",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              minLength={2}
              maxLength={50}
              type="text"
              placeholder="Estado"
              {...register("estado", {
                required: "Este dato es obligatorio",
                minLength: {
                  value: 2,
                  message: "Caracteres Minimos 2",
                },
                maxLength: {
                  value: 50,
                  message: "Caracteres maximos 2",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.estado?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              min={1}
              max={10000}
              type="number"
              placeholder="Ingrese el Precio"
              {...register("precio", {
                required: "El campo es obligatorio",
                min: {
                  value: 1,
                  message: "El precio debe ser igual o mayor a $1",
                },
                max: {
                  value: 10000,
                  message: "El precio debe ser igual o menor a $10.000",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDetalle">
            <Form.Label>Detalle</Form.Label>
            <Form.Control
            minLength={2}
            maxLength={1000}
              type="text"
              placeholder="Ingrese el Detalle"
              {...register("detalle", {
                required: "El campo es obligatorio",
                minLength: {
                  value: 2,
                  message: "Caracteres minimos 2",
                },
                maxLength: {
                  value: 1000,
                  message: "Caracteres maximos 1000",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.detalle?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="bebida">Bebida </option>
              <option value="asado">Asado</option>
              <option value="pasta">Pasta</option>
              <option value="postre">Postre</option>
            </Form.Select>
            <Form.Text className="text-warning">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
            minLength={2}
            maxLength={500}
              type="text"
              placeholder="Ej: ingrese un Url"
              {...register("imagen", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "Ingrese una Url valida",
                },
              })}
            />
            <Form.Text className="text-warning">
              {errors.imagen?.message}
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

export default CrearProducto;
