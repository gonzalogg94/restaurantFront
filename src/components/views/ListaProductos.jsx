
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';


const ListaProductos = () => {
  return (
    <section className="fuente colorFondo">
      <div className='posicionBadge position-fixed'>
        <Link>
      <Badge className='fs-5 m-5'  bg="secondary"><i className="bi bi-cart-check-fill"> 10</i></Badge> 
        </Link>
      </div>
        <article className="row">
        <aside class="col-lg-2 col-md-2 fondoLateral esconder">
          <div class="sidebar d-none d-md-grid col-md-2 col-lg-2 text-light">
            <ul class="list-group mt-5">
              <li class="list-group-item listSidebar">
                <a href="#pastas">Pastas</a>
              </li>
              <li class="list-group-item listSidebar">
                <a href="#parrilla">Parilla</a>
              </li>
              <li class="list-group-item listSidebar">
                <a href="#vinos">Vinos</a>
              </li>
              <li class="list-group-item listSidebar">
                <a href="#postres">Postres</a>
              </li>
            </ul>
          </div>
      </aside>
      <aside className="col-lg-10 col-md-10 col-sm-12">
      <div className="text-center text-white py-5 container">
          <h1> Nuestro Menu</h1>
          <hr/>
        </div>
          <h2 className="text-center text-white">Pastas</h2>
        <article className="row my-5 justify-content-center container-fluid">
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        </article>
          <h2 className="text-center text-white mt-5">Parilla</h2>
          <article className="row my-5 justify-content-center container-fluid">
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://www.lanacion.com.ar/resizer/YwJjC66xmnez5NY25Nm_6x_kNWA=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3I7EMRO7BBSBGC3TULJSQZG5Q.jpg"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://www.lanacion.com.ar/resizer/YwJjC66xmnez5NY25Nm_6x_kNWA=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3I7EMRO7BBSBGC3TULJSQZG5Q.jpg"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://www.lanacion.com.ar/resizer/YwJjC66xmnez5NY25Nm_6x_kNWA=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3I7EMRO7BBSBGC3TULJSQZG5Q.jpg"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        </article>
          <h2 className="text-center text-white mt-5">Vinos</h2>
          <article className="row my-5 justify-content-center container-fluid">
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://images.squarespace-cdn.com/content/v1/5f08aff4a2ca8c5d0e308689/3e1eb420-5c4c-49aa-b0e1-5b3f1f47c5e0/_MGL0342.jpg"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://images.squarespace-cdn.com/content/v1/5f08aff4a2ca8c5d0e308689/3e1eb420-5c4c-49aa-b0e1-5b3f1f47c5e0/_MGL0342.jpg"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://images.squarespace-cdn.com/content/v1/5f08aff4a2ca8c5d0e308689/3e1eb420-5c4c-49aa-b0e1-5b3f1f47c5e0/_MGL0342.jpg"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        </article>
          <h2 className="text-center text-white mt-5">Postres</h2>
          <article className="row my-5 justify-content-center container-fluid">
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_1200_fallback/public/2020-08/dessert-recipes.jpg?itok=M0kKD2yr"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_1200_fallback/public/2020-08/dessert-recipes.jpg?itok=M0kKD2yr"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        <aside class="col-lg-3 col-md-4 col-sm-8 m-3">
              <div class="card">
                <img
                src="https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_1200_fallback/public/2020-08/dessert-recipes.jpg?itok=M0kKD2yr"
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
                      <button class="btn"><a class="text-white text-decoration-none" href="./pages/error404.html">Detalles</a></button>
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
        </article>
      </aside>
        </article>
    </section>
  );
};

export default ListaProductos;
