import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../components/img/Logo.png";
import "../../components/style.css";

const Menu = () => {
  return (
    <Navbar className="bgTransparente" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand md={4} className="text-center" as={Link} to="/">
          <img src={logo} alt="Logo" className="w-50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav md={8} className="me-auto">
            <NavLink end className="nav-item nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/administrador">
              Administrar
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/logout">
              Logout
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/registro">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
