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
            <h3>No existe la modernidad sin una buena tradicion</h3>
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
              Nuestra comida es poner nuestra personalidad en lo que hacemos y
              ese sentimiento nos convierte en algo distinto
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
              Porque amamos la vida y nustras tradiciones le ponemos pasion en
              la cocina
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <article className="text-center text-white py-5 container">
        <h2 className="text-white">Tafi De Mistol</h2>
        <hr className="container" />
        <p>
          {" "}
          Tafi de Mistol se encuentra un espacio dedicado a la cocina Argentina,
          su nombre es cultural . Es ideal para los amantes de la elegancia y el
          confort, además la dulce vibración que emite el piano todas las
          noches, termina de complementar el encanto del lugar acompañado por
          sus platos fuertes.No podía faltar una amplia lista de vinos y
          licores, que junto a la decoración y ambiente del lugar, logran ser un
          lugar estratégico para cerrar negocios o disfrutar de una velada
          romántica.
        </p>
      </article>
      {/* card */}
      <article class=" row  container-fluid justify-content-center">
        <Link
          class="card card--1 m-2 w-25 col-sm-6 col-md-6 col-lg-3 text-decoration-none text-black "
          to={"/entradas"}
        >
          <aside>
            <div class="card__info-hover">
              <div class="card__clock-info"></div>
            </div>
            <div class="card__img"></div>

            <div class="card__img--hover"></div>

            <div class="card__info">
              <span class="card__category">Entradas</span>
              <h3 class="card__title">
                Las mejores entradas de nuestra carta para iniciar tus comidas
              </h3>
            </div>
          </aside>
        </Link>
        <Link
          class="card card--2  m-2 w-25 col-sm-6 col-md-6 col-lg-3  text-decoration-none text-black "
          to={"/platos-principales"}
        >
          <aside>
            <div class="card__img"></div>

            <div class="card__img--hover"></div>

            <div class="card__info">
              <span class="card__category">Plato Principal</span>
              <h3 class="card__title">Tenemos las mejores opciones para vos</h3>
            </div>
          </aside>
        </Link>
        <Link
          class="card card--3  m-2 w-25 col-sm-6 col-md-6 col-lg-3 text-decoration-none text-black"
          to={"/menu"}
        >
          <aside>
            <div class="card__img"></div>
            <Link href="#" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Postres</span>
              <h3 class="card__title">Las mejores postres artesanales</h3>
            </div>
          </aside>
        </Link>
        <Link
          class="card card--4  m-2 w-25 col-sm-6 col-md-6 col-lg-3 text-decoration-none text-black "
          to={"/menu"}
        >
          <aside>
            <div class="card__img"></div>
            <Link href="#" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Bebidas</span>
              <h3 class="card__title">
                Contamos con una gran variedad de vinos para acompañar tus
                comidas
              </h3>
            </div>
          </aside>
        </Link>
        <Link
          class="card card--4  m-2 w-25 col-sm-6 col-md-6 col-lg-3 text-decoration-none text-black "
          to={"/menu"}
        >
          <aside>
            <div class="card__img"></div>
            <Link href="#" class="card_link">
              <div class="card__img--hover"></div>
            </Link>
            <div class="card__info">
              <span class="card__category">Aperitivos</span>
              <h3 class="card__title">
                Contamos con los mejores aperitivos del pais
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
            Lo mejor de la comida argentina lo encontras en Tafi de Mistol
          </h2>
          <article className="row pt-4 justify-content-center">
            <div className="col-4 text-center text-white">
              <i className="bi bi-credit-card-2-back fs-1"></i>
              <h3>Recibimos todas las tarjetas</h3>
            </div>
            <div className="col-4 text-center text-white fs-1">
              <i className="bi bi-telephone-inbound"></i>
              <h3>Realizar reserva previa</h3>
            </div>
            <div className="col-4 text-center text-white">
              <i className="bi bi-pencil-square text-white fs-1"></i>
              <h3>Realiza tu pedido desde nuestra web</h3>
            </div>
          </article>
        </article>
      </Container>
    </section>
  );
};

export default Inicio;
