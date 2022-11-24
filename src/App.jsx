import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Nosotros from './components/views/Nosotros';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdministradorProductos from './components/views/AdministradorProductos';
import CrearProducto from './components/views/producto/CrearProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import DetalleProducto from './components/views/DetalleProducto';
import Registro from './components/views/Registro';
import AdminUsuarios from './components/views/AdminUsuarios';
import Login from './components/views/Login';
import { useState } from 'react';
import ListaEntradas from './components/views/ListaEntradas';
import ListaPlatoPrincipal from './components/views/ListaPlatoPrincipal';
import ListaPostres from './components/views/ListaPostres';
import ListaBebidas from './components/views/ListaBebidas';
import ListaAperitivos from './components/views/ListaAperitivos';
import Carta from './components/views/carta/Carta';
import PedidosAdmin from "./components/views/PedidosAdmin"
import FormPedidos from './components/views/pedidos/FormPedidos';


function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || [];
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  const saludo = JSON.parse(localStorage.getItem("saludo")) || [];
  const [saludoNavbar, setSaludoNavbar] = useState(saludo);

  return (
 <BrowserRouter>
 <Menu saludoNavbar={saludoNavbar} setSaludoNavbar={setSaludoNavbar} usuarioLogueado={usuarioLogueado} setsetUsuarioLogueado={setUsuarioLogueado}></Menu>
 <Routes>
 <Route exact path='/' element={<Inicio></Inicio>}></Route>
 <Route exact path='/nosotros' element={<Nosotros></Nosotros>} />
 <Route exact path='/carta' element={<Carta></Carta>} />
 <Route exact path='/entradas' element={<ListaEntradas></ListaEntradas>} />
 <Route exact path='/platos-principales' element={<ListaPlatoPrincipal></ListaPlatoPrincipal>} />
 <Route exact path='/postres' element={<ListaPostres></ListaPostres>} />
 <Route exact path='/bebidas' element={<ListaBebidas></ListaBebidas>} />
 <Route exact path='/aperitivos' element={<ListaAperitivos></ListaAperitivos>} />
 <Route exact path='/administrador' element={<AdministradorProductos/>} />
 <Route exact path='/administrador/crearProd' element={<CrearProducto/>} />
 <Route exact path='/administrador/editarProd/:id' element={<EditarProducto/>} />
 <Route exact path='/detalles/producto/:id' element={<DetalleProducto></DetalleProducto>} />
 <Route exact path='/administrador/editarProd' element={<EditarProducto/>} />
 <Route exact path='/registro' element={<Registro/>} />
 <Route exact path='/adminUsuarios' element={<AdminUsuarios/>} />
 <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado} setSaludoNavbar={setSaludoNavbar}/>} />
 <Route exact path='/administrador/pedidosAdmin' element={<PedidosAdmin/>} />
 <Route exact path='/administrador/pedidosAdmin/editarPedido/:id' element={<FormPedidos/>} />
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
  );
}

export default App;
