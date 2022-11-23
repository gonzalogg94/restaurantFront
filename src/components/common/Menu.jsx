import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../components/img/Logo.png";
import "../../components/style.css";

const Menu = ({
  saludoNavbar,
  setSaludoNavbar,
  usuarioLogueado,
  setUsuarioLogueado,
}) => {
  const navegar = useNavigate();

  const logout = () => {
    //norrar el localstorage
    navegar("/");
    localStorage.removeItem("tokenUsuario");
    localStorage.removeItem("saludo");
    setUsuarioLogueado({});
    setSaludoNavbar("");
  };

  return (
    <section className="bgTransparente fuente fs-5  fw-bold">
      <Container>
        <Navbar variant="dark" expand="lg" className="row m-0 p-0">
          <Col lg={6} className="text-center">
            <Navbar.Brand className="text-start m-0 p-0 " as={Link} to="/">
              <img src={logo} alt="Logo" className="w-50 m-0 p-0" />
            </Navbar.Brand>
          </Col>

          <Col lg={6} className="text-center pb-3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <div className="text-light px-5 py-2 fuente fs-5 fw-bold">
                {saludoNavbar}
              </div>

              <Nav className="me-auto text-center">
                <NavLink end className="nav-item nav-link" to="/">
                  Inicio
                </NavLink>
                <NavLink end className="nav-item nav-link" to="/registro">
                  Registrarse
                </NavLink>
                {usuarioLogueado.email ? (
                  <>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/administrador"
                    >
                      Administrar
                    </NavLink>
                    <NavLink
                      end
                      className="nav-item nav-link"
                      to="/adminUsuarios"
                    >
                      Usuarios
                    </NavLink>
                    <Button variant="danger" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <NavLink end className="nav-item nav-link" to="/login">
                    Login
                  </NavLink>
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
