import MenuEntradas from "./MenuEntradas";
import MenuPlatoPrincipal from "./MenuPlatoPrincipal";

const Carta = () => {
  return (
    <section className="fuente colorFondo py-5">
      <div className="text-center text-white">
        <h1>Carta Tafi De Mistol</h1>
        <hr />
      </div>
      <MenuEntradas></MenuEntradas>
      <MenuPlatoPrincipal></MenuPlatoPrincipal>
    </section>
  );
};

export default Carta;
