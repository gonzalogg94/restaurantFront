import { Routes, Route } from "react-router-dom";
import AdministradorProductos from "../../views/AdministradorProductos";
import CrearProducto from "../../views/producto/CrearProducto";
import EditarProducto from "../../views/producto/EditarProducto";
import RegistroAdministrador from "../../views/RegistroAdministrador";
import AdminClientes from "../../views/AdminClientes";
import AdminUsuarios from "../../views/AdminUsuarios";
import PedidoCliente from "../../views/carta/PedidoCliente";
import AdministradorPedidos from "../../views/AdministradorPedidos";
import EditarPedido from "../../views/pedidos/EditarPedido";
import AgregarPedido from "../../views/pedidos/AgregarPedido";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/PedidoCliente"
          element={<PedidoCliente></PedidoCliente>}
        />
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
        
        <Route
          exact
          path="/registroAdministrador"
          element={<RegistroAdministrador />}
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
        <Route
          exact
          path="/pedidosAdmin/creadPed"
          element={<AgregarPedido />}
        />
        
      </Routes>
    </>
  );
};

export default RutasAdministrador;
