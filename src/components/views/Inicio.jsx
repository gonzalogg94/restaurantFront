import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <section className="colorFondo fuente">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://img.freepik.com/foto-gratis/sopa-india-tradicional-lentejas-indian-dhal-curry-picante-tazon-especias-hierbas-rustica-mesa-madera-negra_2829-18717.jpg?w=2000"
            alt="Imagen banner"
          />
          <Carousel.Caption>
            <h3>Honramos nuestras recetas tradicionales con los mejores ingredientes</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://www.guiaoleo.com.ar/wp-content/uploads/2022/06/Los-mejores-restaurantes-de-Argentina-1.jpg"
            alt="Imagen banner "
          />

          <Carousel.Caption>
            <h3>
            Con la distinción que nos caracteriza y la pasión que nos moviliza, nuestros platos se disfrutan y se destacan
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/J3R7JZL3ZZG3ZNIBZSEMC7WALI.jpg"
            alt="Imagen banner "
          />

          <Carousel.Caption>
            <h3>
            Somos el complemento perfecto para tus ocasiones especiales
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <article className="text-center text-white py-5 container">
        <h2 className="text-white">Tafi De Mistol</h2>
        <hr className="container" />
        <p>
          {" "}
          Tafi de Mistol es un restaurante de raíces tucumanas y cordobesas. La
          pasión por los orígenes, tradiciones y culturas de nuestras tierras se
          fusionaron en un nombre de tinte autóctono, para honrar lo que nos
          une. En Tafi de Mistol encontrarás un lugar elegante y confortable;
          aquí se busca el balance perfecto entre sabores, texturas y
          presentación. Encontrarás vinos de selección, productos de estación,
          ambiente agradable y un menú tradicional de tres tiempos con
          estándares de excelencia.
        </p>
      </article>
      {/* card */}
      <article className=" row justify-content-center text-center  container-fluid">
        <Link
          className="card my-4 card--1 col-sm-12 col-md-3 col-lg-3 text-decoration-none text-black ms-4"
          to={"/entradas"}
        >
          <aside>
            <div className="card__info-hover">
              <div className="card__clock-info"></div>
            </div>
            <div className="card__img text-center"></div>

            <div className="card__img--hover"></div>

            <div className="card__info">
              <span className="card__category">Entradas</span>
              <h3 className="card__title">
              Selección de entrantes fríos y calientes
              </h3>
            </div>
          </aside>
        </Link>
        <Link
          className="card my-4 card--2 col-sm-12 col-md-3 col-lg-3  text-decoration-none text-black  ms-4 "
          to={"/platos-principales"}
        >
          <aside>
            <div className="card__img"></div>

            <div className="card__img--hover"></div>

            <div className="card__info">
              <span className="card__category">Plato Principal</span>
              <h3 className="card__title">
              Platos tradicionales con notas de autor
              </h3>
            </div>
          </aside>
        </Link>
        <Link
          className="card my-4 card--3  col-sm-12 col-md-3 col-lg-3 text-decoration-none text-black  ms-4 "
          to={"/postres"}
        >
          <aside>
            <div className="card__img"></div>

            <div className="card__img--hover"></div>

            <div className="card__info">
              <span className="card__category">Postres</span>
              <h3 className="card__title">De tinte artesanal y gourmet</h3>
            </div>
          </aside>
        </Link>
        <Link
          className="card card--4 my-4 col-sm-12 col-md-3 col-lg-3 text-decoration-none text-black   ms-4 "
          to={"/bebidas"}
        >
          <aside>
            <div className="card__img"></div>

            <div className="card__img--hover"></div>

            <div className="card__info">
              <span className="card__category">Bebidas</span>
              <h3 className="card__title">
              contamos con una cava privada de vinos para un maridaje perfecto
              </h3>
            </div>
          </aside>
        </Link>
        <Link
          className="card card--5  my-4 col-12 col-md-3 col-lg-3 text-decoration-none text-black  ms-4 "
          to={"/aperitivos"}
        >
          <aside>
            <div className="card__img"></div>

            <div className="card__img--hover"></div>

            <div className="card__info">
              <span className="card__category">Aperitivos</span>
              <h3 className="card__title">
              contamos con una cava privada de vinos para un maridaje perfecto
              </h3>
            </div>
          </aside>
        </Link>
      </article>
      {/* card */}
      <Container>
        <hr className="text-white" />
        <article className="text-white container py-4 text-center">
          <h2>
          Tafi de Mistol, un espacio ideal para ocasiones especiales o reuniones de negocios
          </h2>
          <article className="row pt-4 justify-content-center">
            <div className="col-4 text-center text-white">
              <i className="bi bi-credit-card-2-back fs-1"></i>
              <h3>Aceptamos todos los medios de pago</h3>
            </div>
            <div className="col-4 text-center text-white fs-1">
              <i className="bi bi-telephone-inbound"></i>
              <h3>Reservá con anticipación</h3>
            </div>
            <div className="col-4 text-center text-white">
              <i className="bi bi-pencil-square text-white fs-1"></i>
              <h3>Pedidos online</h3>
            </div>
          </article>
        </article>
      </Container>
    </section>
  );
};

export default Inicio;
