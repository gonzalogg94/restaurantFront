import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  const { _id, nombreProducto, precio, imagen, categoria, estado} = {
    ...producto,
  };
  return (
    <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
      <div class="card">
        <img src={imagen} class="w-100" alt="Lasagna" />
        <div class="card-body text-center text-bg-dark">
          <h5 class="card-title">{nombreProducto}</h5>
          <h5>{precio}</h5>
          <div>
            <span class="badge text-bg-warning">{estado}</span>
          </div>
          <div>
            <span class="badge text-bg-warning">{categoria}</span>
          </div>
          <div class="row mt-4">
            <div class="col-6">
              <Link to={`/detalles/producto/${_id}`}>
                <button class="btn">
                  <a class="text-white text-decoration-none">Detalles</a>
                </button>
              </Link>
            </div>
            <div class="col-6">
              <button class="btn col-6">
                <i class="bi bi-cart4 text-white fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CardProducto;
