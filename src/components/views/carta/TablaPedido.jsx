import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import { borrarPedidoApiCliente, consultarPedidosApi } from "../../helpers/queries";
const TablaPedido = (props) => {

const titularCarro = (JSON.parse(localStorage.getItem("tokenCliente")));
const clienteCarro = titularCarro.nombreCliente + ' ' + titularCarro.apellido
console.log(clienteCarro)

  const borrarPedido= ()=>{
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "No podras recuperar el Pedido",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Eliminar!',
      cancelButtonText: '¡Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
borrarPedidoApiCliente(props.pedido._id).then((respuesta)=>{
  if(respuesta.status===200){
    consultarPedidosApi().then((respuesta)=>{
      props.setPedidos (respuesta.filter((pedido) => pedido.nombreClientePedido ===  clienteCarro))
    })
  }
})
        Swal.fire(
          '¡Eliminado!',
          'Tu pedido ha sido eliminado.',
          'success'
        )
      }
    })
  }
  return (
    <tr>
      <td>{props.pedido._id}</td>
      <td>{props.pedido.detallePedido}</td>
      <td>{props.pedido.estado}</td>
      <td>{props.pedido.costoTotal}</td>
      <td>{props.pedido.nombreClientePedido}</td>
      <td>
      <Button variant="none" onClick={borrarPedido} >  <i  className="bi bi-file-earmark-x-fill text-danger iconAdmin"></i></Button>
      
          
        
         
    
      </td>
    </tr>
  );
};

export default TablaPedido;
