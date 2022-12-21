import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const token = JSON.parse(localStorage.getItem('tokenUsuario')) || JSON.parse(localStorage.getItem('tokenCliente')) ||null;
  
    if(!token){
        return <Navigate to={'/registro'}></Navigate>
    }else{
        return children;
    }
  };
  
  export default RutasProtegidas;