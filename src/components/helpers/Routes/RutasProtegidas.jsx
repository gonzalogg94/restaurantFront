import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const token = JSON.parse(localStorage.getItem('tokenCliente' || 'tokenUsuario')) || null;
  
    if(!token){
        //si está vacío
        return <Navigate to={'/loginCliente'}></Navigate>
    }else{
        //si estamos logueados
        return children;
    }
  };
  
  export default RutasProtegidas;