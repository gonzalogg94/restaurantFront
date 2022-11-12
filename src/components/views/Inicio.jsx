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
            <h3>Nuestra comida es poner nuestra personalidad en lo que hacemos y ese sentimiento nos convierte en algo distinto</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerPagina"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/J3R7JZL3ZZG3ZNIBZSEMC7WALI.jpg"
            alt="Imagen banner "
          />

          <Carousel.Caption>
            <h3>Porque amamos la vida y nustras tradiciones le ponemos pasion en la cocina</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <article className="text-center text-white py-5">
        <h2 className="text-white">Tafi De Mistol</h2>
        <hr className="container" />
        <p>Un lugar donde encontras la mejor comida tradicional argentina </p>
      </article>
    </section>
  );
};

export default Inicio;
