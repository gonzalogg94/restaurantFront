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
      <article className="text-center text-white py-5">
        <h2 className="text-white">Tafi De Mistol</h2>
        <hr className="container" />
        <p>Un lugar donde encontras la mejor comida tradicional argentina </p>
      </article>
      {/* card */}
      <article class=" row  container-fluid">
        <aside class="card card--1 mx-2 w-25 col-sm-6 col-md-6 col-lg-3">
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
        <aside class="card card--2  mx-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> Travel</span>
            <h3 class="card__title">Discover the sea</h3>
          </div>
        </aside>
        <aside class="card card--3  mx-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> Travel</span>
            <h3 class="card__title">Discover the sea</h3>
          </div>
        </aside>
        <aside class="card card--2  mx-2 w-25 col-sm-6 col-md-6 col-lg-3">
          <div class="card__img"></div>
          <a href="#" class="card_link">
            <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> Travel</span>
            <h3 class="card__title">Discover the sea</h3>
          </div>
        </aside>
      </article>
      {/* card */}
      <article className="text-white container mt-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui fugiat adipisci voluptatibus, reiciendis corporis ad excepturi quo officiis eos doloribus blanditiis odit repellat minus. Quis, ullam? Delectus laboriosam blanditiis obcaecati quas amet. Officia minus aperiam ipsam officiis reiciendis maxime, eaque ullam dicta, voluptas incidunt voluptatum beatae fugiat blanditiis quidem unde aspernatur, dolore perspiciatis maiores consequuntur fuga dolores? Neque consequatur expedita perspiciatis, sit molestiae nisi aperiam esse dolor harum inventore cupiditate rem vero fugiat, modi quo soluta eligendi recusandae aliquam quas veniam eum. Quis, nobis! Voluptatum, vel quis delectus, autem atque est enim qui aspernatur quam voluptas eum. Inventore, veniam fugiat!</p>
      </article>
    </section>
  );
};

export default Inicio;
