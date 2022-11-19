import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../components/img/Logo.png";
import "../../components/style.css";

const Menu = () => {
  return (
    <section className="bgTransparente">
      <Container>
        <Navbar variant="dark" expand="lg" className="text-center">
          <Navbar.Brand className="text-start mx-0 px-0" as={Link} to="/">
            <img src={logo} alt="Logo" className="w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto text-center">
              <NavLink end className="nav-item nav-link" to="/">
                Inicio
              </NavLink>
              <NavLink end className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink end className="nav-item nav-link" to="/registro">
                Registrarse
              </NavLink>
              <NavLink end className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
              <NavLink end className="nav-item nav-link" to="/administrador">
                Administrar
              </NavLink>
              <NavLink end className="nav-item nav-link" to="/adminUsuarios">
                Usuarios
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
