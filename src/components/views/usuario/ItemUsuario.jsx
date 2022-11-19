import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarUserAPI } from "../../helpers/queries";
import { consultarUsersAPI } from "../../helpers/queries";

const ItemUsuario = ( {usuario, setUsuarios} ) => {

    const borrarUsuario = ()=>{
        Swal.fire({
            title: '¿Está seguro?',
            text: "Se está por borrar el usuario seleccionado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                //realizar consulta api
                borrarUserAPI(usuario.id).then((respuesta)=>{
                    if(respuesta.status === 200){
                        consultarUsersAPI().then((respuesta)=>{
                            setUsuarios(respuesta)
                        })
                        Swal.fire(
                          'Listo',
                          'El usuario fue borrado',
                          'success'
                        )
                    }else{
                        Swal.fire(
                          'Se produjo un error',
                          'Vuelva a intentarlo más tarde',
                          'error'
                        )
                    }
                })
            }
          })
    }

    return (
        <tr>
        <td>{usuario.id}</td>
        <td>{usuario.nombreUsuario}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.email}</td>
        <td>{usuario.contrasena}</td>
        <td>
        <Button className="m-1" variant="danger" onClick={borrarUsuario}>
          Borrar
        </Button>
        </td>
      </tr>
    );
};

export default ItemUsuario;