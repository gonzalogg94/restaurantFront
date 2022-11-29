import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { consultarUsersAPI } from "../helpers/queries";
import ItemUsuario from "./usuario/ItemUsuario";
import { Link } from "react-router-dom";

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
              <Link className="btn btn-success" variant="outline-info" to="/registroAdministrador">Agregar</Link>
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th> Nombre de Usuario</th>
                  <th> Apellido</th>
                  <th> E-mail</th>
                  <th> Contraseña</th>
                  <th> Opciones</th>
                </tr>
              </thead>
              <tbody>
             {
                usuarios.map((usuario)=><ItemUsuario key={usuario._id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuario>)
             }
              </tbody>
            </Table>
          </div>
        </Container>
      </section>
    );
};

export default AdminUsuarios;