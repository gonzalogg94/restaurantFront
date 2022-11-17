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

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path='/' element={<Inicio></Inicio>}></Route>
 <Route exact path='/nosotros' element={<Nosotros></Nosotros>} />
 <Route exact path='/menu' element={<ListaProductos></ListaProductos>} />
 <Route exact path='/administrador' element={<AdministradorProductos/>} />
 <Route exact path='/administrador/crearProd' element={<CrearProducto/>} />
 <Route exact path='/administrador/editarProd/:id' element={<EditarProducto/>} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
