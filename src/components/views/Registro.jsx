import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { crearClientesAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreCliente: "",
      apellido: "",
      email: "",
      contrasena: "",
      estado: "",
      perfil: "",
    },
  });

  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos);
    console.log("desde el evento onsubmit");
    crearClientesAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "¡Cliente Generado!",
          "El registro se completó correctamente",
          "success"
        );
        reset();
        navegacion("/loginCliente");
      } else {
        Swal.fire(
          "Ocurrio un error",
          "El email ya pertenece a un cliente registrado.",
          "error"
        );
      }
    });
  };

  return (
    <section className="colorFondo text-light">
      <Container className="py-5">
        <div>
          <h2 className="display-3 text-center by-3 fuente">Nuevo Cliente</h2>
          <hr />
        </div>
        <div>
          <Form className="by-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombreCliente">
              <Form.Label className="fuente fs-4">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                {...register("nombreCliente", {
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
                {errors.nombreCliente?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label className="fuente fs-4">Apellido</Form.Label>
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
              <Form.Label className="fuente fs-4">E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                {...register("email", {
                  required: "El mail es obligatorio",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Debe ingresar un mail válido.",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fuente fs-4">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("contrasena", {
                  required: "Es obligatorio ingresar una password",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "La contraseña debe como minimo 8 caracteres y al menos una letra, un número y un símbolo especial.",
                  },
                })}
              />
              <Form.Text className="text-warning">
                {errors.contrasena?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label className="fuente fs-4">Estado</Form.Label>
              <Form.Select
                {...register("estado", {
                  required: "Debe seleccionar un estado",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value="Familiar">Familiar</option>
                <option value="Institucional">Institucional</option>
              </Form.Select>
              <Form.Text className="text-warning">
                {errors.estado?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPerfil">
              <Form.Label className="fuente fs-4">Perfil</Form.Label>
              <Form.Select
                {...register("perfil", {
                  required: "Debe seleccionar un perfil",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value="Sin restricciones">Sin restricciones</option>
                <option value="Celíaco, vegano, etc">
                  Celíaco, vegano, etc
                </option>
              </Form.Select>
              <Form.Text className="text-warning">
                {errors.perfil?.message}
              </Form.Text>
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="my-3 fw-bold fs-3 fuente "
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
