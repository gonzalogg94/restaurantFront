import { Routes, Route } from "react-router-dom";
import AdministradorProductos from "../views/AdministradorProductos";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import AdminClientes from "../views/AdminClientes";
import AdminUsuarios from "../views/AdminUsuarios";
import AdministradorPedidos from "../views/AdministradorPedidos";
import EditarPedido from "../views/pedidos/EditarPedido";


const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdministradorProductos />}
        />
        <Route
          exact
          path="/crearProd"
          element={<CrearProducto />}
        />
        <Route
          exact
          path="/editarProd/:id"
          element={<EditarProducto />}
        />
        <Route
          exact
          path="/editarProd"
          element={<EditarProducto />}
        />
        <Route exact path="/adminClientes" element={<AdminClientes />} />
        <Route exact path="/adminUsuarios" element={<AdminUsuarios />} />
        <Route
          exact
          path="/pedidosAdmin"
          element={<AdministradorPedidos />}
        />
        <Route
          exact
          path="/pedidosAdmin/editarPedido/:id"
          element={<EditarPedido />}
        />
      </Routes>
    </>
  );
};

export default RutasAdministrador;
