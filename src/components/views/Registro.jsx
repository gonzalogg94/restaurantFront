import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { crearUserAPI } from "../helpers/queries";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registro = () => {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      apellido:"",
      email: "",
      contrasena: "",
    },
  });

  const navegacion = useNavigate()

  const onSubmit = (datos) => {
    //datos validados
    console.log(datos);
    crearUserAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        //se crea el producto
        Swal.fire(
          "Producto creado",
          "El producto fue creado correctamente",
          "success"
        );
        reset();
        //redireccionamiento
        navegacion('/menu');
      } else {
        //mostrar mensaje de error al usuario
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo más tarde", "error");
      }
    });
    console.log("desde nuestra funcion submit");
  };

  return (
    <section className="colorFondo fuente text-light">
      <Container className="py-5">
        <div>
          <h2 className="display-3 text-center by-3">Nuevo Usuario</h2>
          <hr />
        </div>
        <div>
          <Form className="by-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombreUsuario">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                {...register("nombreUsuario", {
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
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNombreUsuario">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido"
                {...register("apellido", {
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
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                {...register("email", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 10,
                    message: "Debe cumplir con un mínimo de 10 caracteres",
                  },
                  maxLength: { value: 60, message: "Máximo de 60 caracteres" },
                  pattern: {
                    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Introduzca un E-mail válido",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("contrasena", {
                  required: "Este valor es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe contener un mínimo de 8 caracteéres",
                  },
                  maxLength: {
                    value: 16,
                    message: "Existe un máximo de 16 caracteres",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener al menos un dígito, al menos una minúscula y al menos una mayúscula",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.contrasena?.message}
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
