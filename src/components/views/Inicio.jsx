import Carousel from "react-bootstrap/Carousel";

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
        <aside class="card card--1 m-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__info-hover">
            <div class="card__clock-info"></div>
          </div>
          <div class="card__img"></div>
          <a
            href="https://media.ambito.com/p/eeeb0aa8490c86a5ed10e052acb243d0/adjuntos/239/imagenes/039/444/0039444907/pastasjpg.jpg"
            class="card_link"
          >
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category">Pastas</span>
            <h3 class="card__title">
              Pastas caseras con la especialidad de la casa
            </h3>
          </div>
        </aside>
        <aside class="card card--2  m-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category">Parilla</span>
            <h3 class="card__title">Los mejores cortes de carne</h3>
          </div>
        </aside>
        <aside class="card card--3  m-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category">Vinos</span>
            <h3 class="card__title">
              Las mejores elecciones estan en nuestra vinoteca
            </h3>
          </div>
        </aside>
        <aside class="card card--4  m-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category">Postres</span>
            <h3 class="card__title">Postres artesanales</h3>
          </div>
        </aside>
      </article>
      {/* card */}
      <hr className="container text-white" />
      <article className="text-white container py-4 text-center">
        <h2>Lo mejor de la comida argentina lo encontras en Tafi de Mistol</h2>
      </article>
      <article className="row pt-2 justify-content-center">
        <div className="col-4 text-center">
        <i className="bi bi-credit-card-2-back text-white fs-1"></i>
        </div>
        <div className="col-4 text-center">
        <i className="bi bi-credit-card-2-back text-white fs-1"></i>
        </div>
        <div className="col-4 text-center">
        <i className="bi bi-credit-card-2-back text-white fs-1"></i>
        </div>
      </article>
    </section>
  );
};

export default Inicio;
