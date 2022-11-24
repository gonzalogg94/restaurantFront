const url = "http://localhost:4000/apirestaurante/pr/productos";
// const url = "http://localhost:3004/productos";

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(url);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoApi = async (producto) => {
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoApi = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoApi = async (id) => {
  try {
    const respuesta = await fetch(url+'/'+id);
    const productoBuscado ={
      dato:await respuesta.json(),
      status: respuesta.status
  
    } 
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoApi = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(url+'/'+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados)
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  
  }
};

//Consultas a API de usuarios

 //const URL = "http://localhost:4000/apirestaurante/us/usuarios"
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

export const crearUserAPI = async (usuario)=>{
    try {
        const respuesta = await fetch (URL,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    } catch (error) {
        console.log(error);        
    }
}

export const borrarUserAPI = async (id)=>{
    try {
        const respuesta = await fetch (`${URL}/${id}`, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);        
    }
}

export const login = async (usuario) =>{
    try{
      //verificar si el usuario existe
      const respuesta = await fetch(URL);
      const listaUsuarios = await respuesta.json();
      //buscar cual usuario tiene mi mail
      const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email )
      if(usuarioBuscado){
        console.log('email encontrado')
        console.log(usuarioBuscado)
        //verificar el password
        if(usuarioBuscado.contrasena === usuario.password ){
            return usuarioBuscado
    }
}
      else{
        console.log('el mail no existe')
        return
      }
    }catch(error){
      console.log('errores en el login')
      return
    }
  }