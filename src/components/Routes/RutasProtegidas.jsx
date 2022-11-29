import { Navigate } from "react-router-dom";


const RutasProtegidas = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('tokenUsuario')) || JSON.parse(localStorage.getItem('tokenCliente')) || null;
    
    if(!token){
        //si está vacío
        return <Navigate to={'/registro'}></Navigate>
    }else{
        //si está logueado
        return children;
    }
};

export default RutasProtegidas;