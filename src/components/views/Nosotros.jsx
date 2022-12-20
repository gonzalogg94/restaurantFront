import React from "react";
import { Container } from "react-bootstrap";
import gonzalo from "../img/Avatar-Gonzalo.png";
import enzo from "../img/Enzo.png";
import florencia from "../img/avatarFlor.png";

const Nosotros = () => {
  return (
    <section className="colorFondo fuente text-white text-center">
      <Container>
        <section className="row pt-5">
          <div className="text-center text-white">
            <h1 className="display-1 my-3">Sobre Nosotros</h1>
            <hr />
          </div>
          <article className="row align-items-center pt-3">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src={gonzalo}
                className="w-50 align-content-center"
                alt="Avatar Gonzalo Gallardo"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="text-white">
                <i className="bi bi-chat-heart-fill "></i> Carlos Gonzalo
                Gallardo
              </h3>
              <p className="text-white">
                Hola, mi nombre es Gonzalo tengo 28 años, soy profesor de
                Educación Física egresado de la UNT y estoy realizando mi tesis
                para recibirme de licenciado. Siempre me atrajo la informática
                aunque nunca me anime a realizar una carrera dedicada
                exclusivamente a ello. Durante la pandemia mi curiosidad por la
                programación despertó a lo que empecé por mi cuenta a estudiar
                Python y luego realicé un curso de Css y Html. Hablando con un
                amigo me comentó sobre Rolling Code y las buenas referencias que
                tenía esta academia a lo que decidí inscribirme . Estoy muy
                feliz de entrar en un mundo donde el limite es nuestra
                creatividad. Saludos a todos.
              </p>
            </div>
            <hr />
          </article>
          <article className="row flex-column-reverse flex-lg-row flex-md-row align-items-center">
            <div className="col-12 col-md-6">
              <h3>
                <i className="bi bi-chat-heart-fill"></i> Enzo Alejandro Heredia
              </h3>
              <p>
                Mi nombre es Enzo, tengo 30 años y durante mucho tiempo tuve la
                curiosidad por entender sobre distintos lenguajes de
                programación y de como desde eso se pueden construir diferentes
                programas y aplicaciones. Realicé en su tiempo la primera parte
                del curso Argentina programa guiado por esa curiosidad y quedé
                aún más interesado, así fue que decidí continuar aprendiendo más
                como para poder luego trabajar de esto.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 justify-content-center">
              <img src={enzo} className="w-50 my-3" alt="avatar Enzo" />
            </div>
          </article>
          <hr />
          <article className="row align-items-center mb-5">
            <div className="col-12 col-md-6 col-lg-6">
              <img src={florencia} className="w-50" alt="avatar florencia" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h3>
                <i className="bi bi-chat-heart-fill"></i> María Florencia Alonso
              </h3>
              <p>
                Soy Florencia, tengo 37 años, soy contadora y me dedico a la
                valuación de empresas para Estados Unidos. En mi carrera, me
                especialicé en impuestos y también realicé un MBA. Elegí
                estudiar programación porque se trata de una disciplina
                apasionante y de una versatilidad sin igual. Mi objetivo es
                aplicar estos conocimientos a las Ciencias Económicas para poder
                progresar en el área de las finanzas corporativas.
              </p>
            </div>
          </article>
          <hr />
          <article className="row flex-column-reverse flex-lg-row flex-md-row align-items-center">
            <div className="col-12 col-md-6">
              <h3>
                <i className="bi bi-chat-heart-fill"></i> Mauricio Alonso
              </h3>
              <p>
                ¡Hey hey! Me llamo Mauricio, tengo 41 años, soy contador,
                magister en administración y, si la situación lo amerita, puedo
                convertirme en guitarrista amateur. Trabajo para el Consejo
                Federal de Inversiones analizando proyectos de inversión. La
                informática siempre fue mi pasatiempo, hasta que decidí hacer de
                esta afición una actividad seria. Me motivó un artículo
                especializado donde se mencionaba que el contador del futuro
                debe tener conocimientos de Big Data, análisis de datos y manejo
                de código. Por ello decidí ingresar a RollingCode, para adquirir
                nuevas habilidades y, por qué no, probarme a mí mismo en un
                nuevo desafío.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 justify-content-center">
              <img src={enzo} className="w-50 my-3" alt="avatar Enzo" />
            </div>
          </article>
          <hr />
          <article className="row align-items-center mb-5">
            <div className="col-12 col-md-6 col-lg-6">
              <img src={florencia} className="w-50" alt="avatar florencia" />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h3>
                <i className="bi bi-chat-heart-fill"></i> María Florencia Alonso
              </h3>
              <p>
                Soy Florencia, tengo 37 años, soy contadora y me dedico a la
                valuación de empresas para Estados Unidos. En mi carrera, me
                especialicé en impuestos y también realicé un MBA. Elegí
                estudiar programación porque se trata de una disciplina
                apasionante y de una versatilidad sin igual. Mi objetivo es
                aplicar estos conocimientos a las Ciencias Económicas para poder
                progresar en el área de las finanzas corporativas.
              </p>
            </div>
          </article>
        </section>
      </Container>
    </section>
  );
};

export default Nosotros;
