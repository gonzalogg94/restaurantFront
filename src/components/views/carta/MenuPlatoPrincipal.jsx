import React from 'react';

const MenuPlatoPrincipal = () => {
    const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      console.log(respuesta);
      setProductos(
        respuesta.filter((producto) => producto.categoria === "Plato principal")
      );
    });
  }, []);
    return (
        <article className="row my-5 justify-content-center container-fluid">
        {productos.map((producto) => (
          <CardProducto
            key={producto._id}
            producto={producto}
          ></CardProducto>
        ))}
      </article>
    );
};

export default MenuPlatoPrincipal;