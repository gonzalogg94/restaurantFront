import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarUserAPI } from "../../helpers/queries";
import { consultarUsersAPI } from "../../helpers/queries";

const ItemUsuario = ({ usuario, setUsuarios }) => {

const titularUsuario = JSON.parse(localStorage.getItem("tokenUsuario"))
  
  const borrarUsuario = () => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "Se está por borrar el usuario seleccionado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed  && usuario._id !== titularUsuario._id) {
        //realizar consulta api
        borrarUserAPI(usuario._id).then((respuesta) => {
          if (respuesta.status === 200 ) {
            consultarUsersAPI().then((respuesta) => {
              setUsuarios(respuesta);
            });
            Swal.fire("Listo", "El usuario fue borrado", "success");
          } else {
            Swal.fire(
              "Se produjo un error",
              "No puede eliminar el usuario logueado",
              "error"
            );
          }
        });
      }else{
      Swal.fire(
              "Se produjo un error",
              "No puede eliminar el usuario logueado.",
              "error"
            );
      }
    });
  };

  return (
    <tr>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.apellido}</td>
      <td>{usuario.email}</td>
      <td>
      <Button variant="none" onClick={borrarUsuario}>
          {" "}
          <i className="bi bi-file-earmark-x-fill text-danger iconAdmin"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
