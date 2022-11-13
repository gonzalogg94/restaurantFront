import React from 'react';
import { Container } from 'react-bootstrap';
import gonzalo from "../img/Avatar-Gonzalo.png"
import enzo from "../img/Enzo.png"

const Nosotros = () => {
    return (
        <section className='colorFondo fuente text-white'>
           <Container>
           <section class="row pt-5">
            <div className='text-center text-white'>
            <h1 class="display-1 my-3">Sobre Nosotros</h1>
            <hr/>
            </div>
                <article class="row align-items-center pt-3">
                  <div class="col-12 col-md-6 col-lg-6">
                    <img
                      src={gonzalo}
                      class="w-50 align-content-center"
                      alt="Avatar Gonzalo Gallardo"
                    />
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                    <h3 className='text-white'>
                      <i class="bi bi-chat-heart-fill "></i> Carlos Gonzalo Gallardo
                    </h3>
                    <p class="text-white">
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
                <article
                class="row flex-column-reverse flex-lg-row flex-md-row align-items-center"
              >
                <div class="col-12 col-md-6">
                  <h3>
                    <i class="bi bi-chat-heart-fill"></i> Enzo Alejandro Heredia
                  </h3>
                  <p>
                    Mi nombre es Enzo, tengo 30 años y durante mucho tiempo tuve la curiosidad por entender sobre distintos lenguajes de programación y de como desde eso se pueden construir diferentes programas y aplicaciones. Realicé en su tiempo la primera parte del curso Argentina programa guiado por esa curiosidad y quedé aún más interesado, así fue que decidí continuar aprendiendo más como para poder luego trabajar de esto.
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-6order-sm-1">
                  <img
                     src={enzo}
                    class="w-50 my-3"
                    alt="avatar Enzo"
                  />
                </div>
              </article>
              </section>
           </Container>
        </section>
    );
};

export default Nosotros;