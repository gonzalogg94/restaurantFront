import { Button } from "react-bootstrap";

const ItemUsuario = ( {usuario, setUsuarios} ) => {
    return (
        <tr>
        <td>{usuario.id}</td>
        <td>{usuario.nombreUsuario}</td>
        <td>{usuario.email}</td>
        <td>{usuario.contrasena}</td>
        <td>
        <Button className="m-1" variant="danger">
          Borrar
        </Button>
        <Button className="m-1" variant="warning">
          Editar
        </Button>
        </td>
      </tr>
    );
};

export default ItemUsuario;