const url = "http://localhost:3004/productos";

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(url);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
