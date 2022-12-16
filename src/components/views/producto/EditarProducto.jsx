import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { editarProductoApi, obtenerProductoApi } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditarProducto = () => {
  const {id}= useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  
  console.log(id);
 
  const navegar = useNavigate();
  useEffect(() => {
        obtenerProductoApi(id).then((respuesta)=>{
            if(respuesta.status===200){
            setValue("nombreProducto", respuesta.dato.nombreProducto)
            setValue("estado", respuesta.dato.estado)
            setValue("precio", respuesta.dato.precio)
            setValue("detalle", respuesta.dato.detalle)
            setValue("categoria", respuesta.dato.categoria)
            setValue("imagen", respuesta.dato.imagen)
            console.log(respuesta);
      }else{
        Swal.fire('Ocurrio un error', 'Intente este paso en unos minutos', 'error')
      }
    })
  },[])
 
  
  const onSubmit = (producto)=>{
    editarProductoApi(id, producto).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire("Producto Actualizado","Actualizacion Correcta", "success")
        navegar('/administrador');
      }else{
        Swal.fire("Error inesperado","Intente Nuevamente","error")
      }
    })
    console.log(producto);
  };


    return (
      <section className="colorFondo fuente text-light">
    <Container>
        <h2 className="display-3 text-center by-3">Administración </h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Nombre producto</Form.Label>
            <Form.Control
              minLength={2}
              maxLength={50}
              type="text"
              placeholder="Nombre del Producto"
              {...register("nombreProducto", {
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
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
                   <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label>Estado</Form.Label>
              <Form.Select
              {...register("estado", {
                required: "Debe seleccionar un estado",
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
            </Form.Select>
            <Form.Text className="text-warning">
              {errors.estado?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              min={1}
              max={20000}
              type="number"
              placeholder="Ingrese el Precio"
              {...register("precio", {
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
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Seleccione una opción</option>
              <option value="Entrada">Entrada</option>
              <option value="Plato principal">Plato principal</option>
              <option value="Postre">Postre</option>
              <option value="Bebida">Bebida</option>
              <option value="Aperitivo">Aperitivo</option>
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
                  value: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
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

export default EditarProducto;