import { useEffect, useState } from "react";
import { Card, Col, Badge, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoApi } from "../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    obtenerProductoApi(id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);
  return (
    <section className=" container py=5">
      <Card className="container my-5 mainSection py-5">
        <Row className="w-sm-75 row">
          <Col className="col-12 col-md-5 col-lg-5">
            <img src={producto.imagen} alt="producto" className="w-100" />
          </Col>
          <Col className="col-12 col-md-7 col-lg-7 py-3">
            <h2 className="fs-2">{producto.nombreProducto}</h2>
            <hr />
            <Badge bg="success">{producto.categoria}</Badge>
            <div>
              <p className="mt-3">
                <b>Precio: ${producto.precio}</b>
              </p>
            </div>
            <div>
              <h3 className="fs-4">Descripción</h3>
              <p>{producto.detalle}</p>
            </div>
            <hr />
            <div className="text-center">
              <Link to="/" className="btn btn-success">
                Volver
              </Link>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default DetalleProducto;
