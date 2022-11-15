
import Inicio from './components/views/Inicio';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from "./components/common/Menu"
import Footer from './components/common/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/menu' element={<Menu></Menu>}></Route>
      <Route exact path='/footer' element={<Footer></Footer>}></Route>
    </Routes>
    <Inicio></Inicio>
    </BrowserRouter>

  );
}

export default App;
