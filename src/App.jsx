import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Nosotros from './components/views/Nosotros';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import ListaProductos from './components/views/ListaProductos';
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
 <Route exact path='/menu' element={<ListaProductos></ListaProductos>} />
 <Route exact path='/administrador' element={<AdministradorProductos/>} />
 <Route exact path='/administrador/crearProd' element={<CrearProducto/>} />
 <Route exact path='/administrador/editarProd/:id' element={<EditarProducto/>} />
 <Route exact path='/detalles/producto/id' element={<DetalleProducto></DetalleProducto>} />
 <Route exact path='/administrador/editarProd' element={<EditarProducto/>} />
 <Route exact path='/registro' element={<Registro/>} />
 <Route exact path='/adminUsuarios' element={<AdminUsuarios/>} />
 <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado} setSaludoNavbar={setSaludoNavbar}/>} />
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
  );
}

export default App;
