import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usuario: "",
      email: "",
      contrasena: "",
    },
  });
  const onSubmit = (datos) => {
    console.log(datos);
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
                placeholder="Nombre y Apellido"
                {...register("usuario", {
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
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                // required
                // minLength={10}
                // maxLength={100}
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
                // required
                // min={8}
                // max={30}
                {...register("pass", {
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
                {errors.pass?.message}
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
