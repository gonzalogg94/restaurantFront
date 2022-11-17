//Consultas a API de usuarios

const URL = "http://localhost:3004/usuarios";

//muestra usuarios
export const consultarUsersAPI = async ()=>{
    try {
        const respuesta = await fetch (URL);
        const listaUsers = await respuesta.json()
        return listaUsers;
    } catch (error) {
        console.log(error);        
    }
}