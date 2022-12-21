import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../components/img/Logo.png";
import "../../components/style.css";

const Menu = ({
  saludoNavbarCliente,
  setSaludoNavbarCliente,
  clienteLogueado,
  setClienteLogueado,
  saludoNavbar,
  setSaludoNavbar,
  usuarioLogueado,
  setUsuarioLogueado,
}) => {
  const navegar = useNavigate();

  const logoutCliente = () => {
    navegar("/");
    localStorage.removeItem("tokenCliente");
    localStorage.removeItem("saludoCliente");
    setClienteLogueado({});
    setSaludoNavbarCliente("");
  };

  const logout = () => {
    navegar("/");
    localStorage.removeItem("tokenUsuario");
    localStorage.removeItem("saludo");
    setUsuarioLogueado({});
    setSaludoNavbar("");
  };

  return (
    <section className="bgTransparente fuente fs-6">
      <Container>
        <Navbar variant="dark" expand="lg" className="row m-0 p-0">
          <Col lg={5} className="text-lg-start text-center">
            <Navbar.Brand className="text-start m-0 p-0 " as={Link} to="/">
              <img src={logo} alt="Logo" className="w-50 m-0 p-0" />
            </Navbar.Brand>
          </Col>

          <Col lg={6} className="alineamiento">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />
            <Navbar.Collapse>
              <Nav className="me-auto text-center">
                <NavLink end className="nav-item nav-link" to="/">
                  Inicio
                </NavLink>

                {clienteLogueado.email ? (
                  <>
                    <NavLink end className="nav-item nav-link" to="/carta">
                      Nuestra Carta
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/PedidoCliente"
                    >
                      Tu pedido
                    </NavLink>
                    <Button
                      variant="danger"
                      className="fuente fs-4 mx-2 mb-3"
                      onClick={logoutCliente}
                    >
                      Salir
                    </Button>
                    <div className="text-light fw-bold">
                      {saludoNavbarCliente}
                    </div>
                  </>
                ) : usuarioLogueado.email ? (
                  <>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/administrador"
                    >
                      Productos
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/adminUsuarios"
                    >
                      Usuarios
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/administrador/pedidosAdmin"
                    >
                      Pedidos
                    </NavLink>
                    <Button
                      variant="danger"
                      className="fuente fs-4 mx-2 mb-3"
                      onClick={logout}
                    >
                      Salir
                    </Button>
                    <div className="text-light fw-bold">{saludoNavbar}</div>
                  </>
                ) : (
                  <>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/loginCliente"
                    >
                      Login
                    </NavLink>
                    <NavLink end className="nav-item nav-link" to="/registro">
                      Registrarse
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/loginUsuario"
                    >
                      Administrador
                    </NavLink>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
