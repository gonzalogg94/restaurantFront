import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Nosotros from "./components/views/Nosotros";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import DetalleProducto from "./components/views/DetalleProducto";
import LoginCliente from "./components/views/LoginCliente";
import LoginUsuario from "./components/views/LoginUsuario";
import { useState } from "react";
import ListaEntradas from "./components/views/portada/ListaEntradas";
import ListaPlatoPrincipal from "./components/views/portada/ListaPlatoPrincipal";
import ListaPostres from "./components/views/portada/ListaPostres";
import ListaBebidas from "./components/views/portada/ListaBebidas";
import ListaAperitivos from "./components/views/portada/ListaAperitivos";
import Basket from "./components/views/carta/Basket";
import Main from "./components/views/carta/Main";
import Carta from "./components/views/carta/Carta";
import Product from "./components/views/carta/Product";
import Error404 from "./components/views/Error404";
import RutasProtegidas from "./components/Routes/RutasProtegidas";
import RutasAdministrador from "./components/Routes/RutasAdministrador";
import Registro from "./components/views/Registro";

function App() {
  const cliente = JSON.parse(localStorage.getItem("tokenCliente")) || [];
  const [clienteLogueado, setClienteLogueado] = useState(cliente);

  const saludoCliente = JSON.parse(localStorage.getItem("saludoCliente")) || [];
  const [saludoNavbarCliente, setSaludoNavbarCliente] = useState(saludoCliente);

  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || [];
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  const saludo = JSON.parse(localStorage.getItem("saludo")) || [];
  const [saludoNavbar, setSaludoNavbar] = useState(saludo);

  return (
    <BrowserRouter>
      <Menu
        saludoNavbarCliente={saludoNavbarCliente}
        setSaludoNavbarCliente={setSaludoNavbarCliente}
        clienteLogueado={clienteLogueado}
        setClienteLogueado={setClienteLogueado}
        saludoNavbar={saludoNavbar}
        setSaludoNavbar={setSaludoNavbar}
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/nosotros" element={<Nosotros></Nosotros>} />
        <Route exact path="/Carta" element={<Carta></Carta>} />
        <Route exact path="/Basket" element={<Basket></Basket>} />
        <Route exact path="/Main" element={<Main></Main>} />
        <Route exact path="/Product" element={<Product></Product>} />
        <Route
          exact
          path="/entradas"
          element={<ListaEntradas></ListaEntradas>}
        />
        <Route
          exact
          path="/platos-principales"
          element={<ListaPlatoPrincipal></ListaPlatoPrincipal>}
        />
        <Route exact path="/postres" element={<ListaPostres></ListaPostres>} />
        <Route exact path="/bebidas" element={<ListaBebidas></ListaBebidas>} />
        <Route
          exact
          path="/aperitivos"
          element={<ListaAperitivos></ListaAperitivos>}
        />
        <Route
          exact
          path="/detalles/producto/:id"
          element={<DetalleProducto></DetalleProducto>}
        />
        <Route
          exact
          path="/loginCliente"
          element={
            <LoginCliente
              setClienteLogueado={setClienteLogueado}
              setSaludoNavbarCliente={setSaludoNavbarCliente}
            />
          }
        />
        <Route
          exact
          path="/loginUsuario"
          element={
            <LoginUsuario
              setUsuarioLogueado={setUsuarioLogueado}
              setSaludoNavbar={setSaludoNavbar}
            />
          }
        />
        <Route exact path="/registro" element={<Registro />} />
        <Route path="/administrador/*" element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
        <Route exact path="*" element={<Error404></Error404>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
