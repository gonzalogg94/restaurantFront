import { useEffect, useState } from "react";
import { Card,Col,Badge,Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoApi } from "../helpers/queries";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const {id}=useParams();
  const [producto,setProducto]=useState({});
  useEffect(()=>{
    obtenerProductoApi(id).then((respuesta)=>{
      console.log(respuesta)
      if (respuesta.status ===200){
        setProducto(respuesta.dato);
      }else{
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    })
  },[]);
    return (
        <Card className="container my-5 mainSection py-5">
        <Row className="w-75">
          <Col md={5}>
            <img src={producto.imagen} alt="producto" className="w-100" />
          </Col>
          <Col md={5} className="py-3">
            <h3>{producto.nombreProducto}</h3>
            <hr />
            <Badge bg="success">{producto.categoria}</Badge>
            <div>
            <p className="mt-3">
              <b>Precio: ${producto.precio}</b>
            </p>
            </div>
            <div>
                <h4>Descripcion</h4>
                <p>{producto.detalle}</p>
            </div>
          </Col>
        </Row>
      </Card>
    );
};

export default DetalleProducto;