import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoApi, consultarApi } from "../../helpers/queries";
const TablaProducto = (props) => {
  const borrarProducto = ()=>{
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "No podras recuperar el Producto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
borrarProductoApi(props.producto._id).then((respuesta)=>{
  if(respuesta.status===200){
    consultarApi().then((respuesta)=>{
      props.setProductos(respuesta)
    })
  }
})
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <tr>
      <td>{props.producto._id}</td>
      <td>{props.producto.nombreProducto}</td>
      <td>{props.producto.estado}</td>
      <td>{props.producto.precio}</td>
      <td>{props.producto.detalle}</td>
      <td>{props.producto.categoria}</td>
      <td>{props.producto.imagen}</td>
      <td>
      <Button variant="none" onClick={borrarProducto} >  <i  className="bi bi-file-earmark-x-fill text-danger iconAdmin"></i></Button>
      <Link className="btn" to={`/administrador/editarProd/${props.producto._id}`}>  <i className="bi bi-file-earmark-diff-fill text-warning  iconAdmin"></i></Link>
          
        
         
    
      </td>
    </tr>
  );
};

export default TablaProducto;
