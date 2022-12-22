import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";

const LoginUsuario = ({ setUsuarioLogueado, setSaludoNavbar }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then((respuesta) => {
      if (respuesta) {
        localStorage.setItem("tokenUsuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        localStorage.getItem("tokenUsuario", JSON.stringify(respuesta));
        const saludo =
          "¡Hola " + respuesta.nombreUsuario + " " + respuesta.apellido + "!";
        localStorage.setItem("saludo", JSON.stringify(saludo));
        setSaludoNavbar(saludo);
        navigate("/administrador");
      } else {
        Swal.fire("Error", "Nombre de usuario o password incorrecto", "error");
      }
    });
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Ingreso-Administradores</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El nombre de usuario es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El nombre de password es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginUsuario;
