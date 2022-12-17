import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  const { _id, nombreProducto, precio, imagen, categoria, estado} = {
    ...producto,
  };
  return (
    <aside className="col-lg-3 col-md-4 col-sm-8 m-3">
      <div className="card">
        <img src={imagen} className="tamañoCard" alt={nombreProducto} />
        <div className="card-body text-center text-bg-dark">
          <h5 className="card-title">{nombreProducto}</h5>
          <h5>{precio}</h5>
          <div>
            <span className="badge text-bg-warning">{estado}</span>
          </div>
          <div>
            <span className="badge text-bg-warning">{categoria}</span>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <Link to={`/detalles/producto/${_id}`}>
                <button className="btn text-white">Detalles</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CardProducto;
