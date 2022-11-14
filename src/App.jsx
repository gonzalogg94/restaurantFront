import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Nosotros from './components/views/Nosotros';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import AdministradorProductos from './components/views/AdministradorProductos';

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path='/' element={<Inicio></Inicio>}></Route>
 <Route exact path='/nosotros' element={<Nosotros></Nosotros>} />
 <Route exact path='/administrador' element={<AdministradorProductos/>} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
