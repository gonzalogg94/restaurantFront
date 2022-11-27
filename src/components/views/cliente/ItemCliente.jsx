import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarClientesAPI } from "../../helpers/queries";
import { consultarClientesAPI } from "../../helpers/queries";

const ItemCliente = ( {cliente, setClientes} ) => {

    const borrarCliente = ()=>{
        Swal.fire({
            title: '¿Está seguro?',
            text: "Se está por borrar el cliente seleccionado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                //realizar consulta api
                borrarClientesAPI(cliente._id).then((respuesta)=>{
                    if(respuesta.status === 200){
                        consultarClientesAPI().then((respuesta)=>{
                            setClientes(respuesta)
                        })
                        Swal.fire(
                          'Listo',
                          'El cliente fue borrado',
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
        <td>{cliente._id}</td>
        <td>{cliente.nombreCliente}</td>
        <td>{cliente.apellido}</td>
        <td>{cliente.email}</td>
        <td>{cliente.contrasena}</td>
        <td>
        <Button className="m-1" variant="danger" onClick={borrarCliente}>
          Borrar
        </Button>
        </td>
      </tr>
    );
};

export default ItemCliente;