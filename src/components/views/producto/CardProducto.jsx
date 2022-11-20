import { Link } from "react-router-dom";


const CardProducto = () => {
    return (
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
        <div class="card">
          <img
          src="https://www.cucinare.tv/wp-content/uploads/2022/07/Diseno-sin-titulo-2022-07-28T221040.013.png"
          class="w-100"
          alt="Lasagna"
          />
          <div class="card-body text-center text-bg-dark">
            <h5 class="card-title">
              Lasagna
            </h5>
            <h5>$1200</h5>
            <span class="badge text-bg-warning">Disponible</span>
            <div class="row mt-4">
              <div class="col-6">
                <Link to={'/detalles/producto/id'}>
                <button class="btn"><a class="text-white text-decoration-none">Detalles</a></button>
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