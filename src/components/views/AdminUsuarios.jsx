import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { consultarUsersAPI } from "../helpers/queries";
import ItemUsuario from "./usuario/ItemUsuario";

const AdminUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState([])
    
    useEffect( ()=> {
        consultarUsersAPI().then((respuesta)=>{
            console.log(respuesta)
            setUsuarios(respuesta)
        })
    }, [])
    

    return (
        <section className="colorFondo fuente">
        <Container className="py-5">
          <div>
            <h2 className="display-3 text-center by-5 text-light">
              Administrador de Usuarios
            </h2>
            <hr />
          </div>
          <div className="table-responsive">
            <div className="d-flex justify-content-around  my-3 text-light">
              <h3>Listado de Usuarios</h3>
              <Button variant="outline-info">Agregar</Button>
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>id</th>
                  <th> nombreUsuario</th>
                  <th> e-mail</th>
                  <th> contraseña</th>
                  <th> opciones</th>
                </tr>
              </thead>
              <tbody>
             {
                usuarios.map((usuario)=><ItemUsuario key={usuario.id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuario>)
             }
              </tbody>
            </Table>
          </div>
        </Container>
      </section>
    );
};

export default AdminUsuarios;