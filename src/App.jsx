
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
    <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
