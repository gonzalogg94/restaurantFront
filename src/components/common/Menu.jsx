import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../components/img/Logo.png";
import "../../components/style.css";

const Menu = ({saludoNavbarCliente, setSaludoNavbarCliente, clienteLogueado, setClienteLogueado, saludoNavbar, setSaludoNavbar, usuarioLogueado, setUsuarioLogueado}) => {

  const navegar = useNavigate()
  
const logoutCliente  =  ()=>{
  //norrar el localstorage
  navegar("/");
  localStorage.removeItem("tokenCliente");
  localStorage.removeItem("saludoCliente");
  setClienteLogueado({});
  setSaludoNavbarCliente("");
}

  const logout = ()=>{
  //norrar el localstorage
  navegar("/");
  localStorage.removeItem("tokenUsuario");
  localStorage.removeItem("saludo");
  setUsuarioLogueado({});
  setSaludoNavbar("");
}

  return (
    <section className="bgTransparente">
      <Container>
        <Navbar variant="dark" expand="lg" className="text-center">
          <Navbar.Brand className="text-start mx-0 px-0" as={Link} to="/">
            <img src={logo} alt="Logo" className="w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <div className="text-light px-5 py-2">
              {saludoNavbarCliente}
            </div>
 
            <Nav className="me-auto text-center">
              <NavLink end className="nav-item nav-link" to="/">
                Inicio
              </NavLink>
              {clienteLogueado.email ? (
                <>
            <NavLink end className="nav-item nav-link" to="/carta">
              Nuestra Carta
            </NavLink>
             <NavLink end className="nav-item nav-link" to="/adminClientes">
              Tu pedido
            </NavLink>
            <Button variant="danger" onClick={logoutCliente}>
                Logout
              </Button>
                </>
              ) : (
                <>
                <NavLink end className="nav-item nav-link" to="/loginCliente">
                Login
              </NavLink>
              <NavLink end className="nav-item nav-link" to="/registro">
                Registrarse
              </NavLink>
                </>
              )
              }  
            </Nav>
            
          </Navbar.Collapse>
          <Navbar.Collapse>
          <div className="text-light px-5 py-2">
              {saludoNavbar}
            </div>
 
            <Nav className="me-auto text-center">
              {usuarioLogueado.email ? (
                <>
                <NavLink end className="nav-item nav-link" to="/administrador">
              Administrar
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/adminUsuarios">
              Usuarios
            </NavLink>
                <Button variant="danger" onClick={logout}>
                Logout
              </Button>
                </>
              ) : (
                <>
                <NavLink end className="nav-item nav-link" to="/loginUsuario">
                Ingreso Administrador
              </NavLink>
                </>
              )
              }  
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
