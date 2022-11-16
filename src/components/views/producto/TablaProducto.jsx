import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
const TablaProducto = (props) => {
  return (
    <tr>
      <td>{props.producto.id}</td>
      <td>{props.producto.nombreProducto}</td>
      <td>{props.producto.estado}</td>
      <td>{props.producto.precio}</td>
      <td>{props.producto.detalle}</td>
      <td>{props.producto.categoria}</td>
      <td>{props.producto.imagen}</td>
      <td>
      <Button variant="none"  >  <i  className="bi bi-file-earmark-x-fill text-danger iconAdmin"></i></Button>
      <Button variant="none" >  <i className="bi bi-file-earmark-diff-fill text-warning  iconAdmin"></i></Button>
          
        
         
    
      </td>
    </tr>
  );
};

export default TablaProducto;
