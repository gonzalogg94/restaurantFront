import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Nosotros from './components/views/Nosotros';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import ListaProductos from './components/views/ListaProductos';

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path='/' element={<Inicio></Inicio>}></Route>
 <Route exact path='/nosotros' element={<Nosotros></Nosotros>} />
 <Route exact path='/menu' element={<ListaProductos></ListaProductos>} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
