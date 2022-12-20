import bcrypt from "bcryptjs";

const url = "http://localhost:4000/apirestaurante/pr/productos";

export const consultarApi = async () => {
  try {
    const respuesta = await fetch(url);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {}
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
  } catch (error) {}
};

export const borrarProductoApi = async (id) => {
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {}
};

export const obtenerProductoApi = async (id) => {
  try {
    const respuesta = await fetch(url + "/" + id);
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return productoBuscado;
  } catch (error) {}
};

export const editarProductoApi = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    return respuesta;
  } catch (error) {}
};

const URL = "http://localhost:4000/apirestaurante/us/usuarios";

export const consultarUsersAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaUsers = await respuesta.json();
    return listaUsers;
  } catch (error) {}
};

export const crearUserAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {}
};

export const borrarUserAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {}
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      const passwordValido = bcrypt.compareSync(
        usuario.password,
        usuarioBuscado.contrasena
      );
      if (passwordValido) {
        return usuarioBuscado;
      }
    } else {
      return;
    }
  } catch (error) {
    return;
  }
};

const URLclientes = "http://localhost:4000/apirestaurante/cl/clientes";

export const consultarClientesAPI = async () => {
  try {
    const respuesta = await fetch(URLclientes);
    const listaClientes = await respuesta.json();
    return listaClientes;
  } catch (error) {}
};

export const crearClientesAPI = async (cliente) => {
  try {
    const respuesta = await fetch(URLclientes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });
    return respuesta;
  } catch (error) {}
};

export const borrarClientesAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLclientes}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {}
};

export const loginClientes = async (cliente) => {
  try {
    const respuesta = await fetch(URLclientes);
    const listaClientes = await respuesta.json();
    const clienteBuscado = listaClientes.find(
      (itemCliente) => itemCliente.email === cliente.email
    );
    if (clienteBuscado) {
      const passwordValido = bcrypt.compareSync(
        cliente.password,
        clienteBuscado.contrasena
      );
      if (passwordValido) {
        return clienteBuscado;
      }
    } else {
      return;
    }
  } catch (error) {
    return;
  }
};

const urlPedidos = "http://localhost:4000/apirestaurante/pe/pedidos";

export const consultarPedidosApi = async () => {
  try {
    const respuesta = await fetch(urlPedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {}
};

export const obtenerPedidoApi = async (_id) => {
  try {
    const respuesta = await fetch(urlPedidos + "/" + _id);
    const pedidoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return pedidoBuscado;
  } catch (error) {}
};

export const editarPedidoApi = async (_id, datosActualizados) => {
  try {
    const respuesta = await fetch(urlPedidos + "/" + _id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    return respuesta;
  } catch (error) {}
};

export const crearPedidoApi = async (pedido) => {
  try {
    const respuesta = await fetch(urlPedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });

    return respuesta;
  } catch (error) {}
};

export const borrarPedidoApiCliente = async (id) => {
  try {
    const respuesta = await fetch(`${urlPedidos}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {}
};

export const tomarPedidoCliente = async (pedido) => {
  try {
    const respuesta = await fetch(urlPedidos, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {}
};
