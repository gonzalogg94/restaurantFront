import MenuEntradas from "./MenuEntradas";
import MenuPlatoPrincipal from "./MenuPlatoPrincipal";
import MenuPostres from "./MenuPostres";

const Carta = () => {
  return (
    <section className="fuente colorFondo py-5">
      <div className="text-center text-white container">
        <h1>Carta Tafi De Mistol</h1>
        <hr />
      </div>
      <MenuEntradas></MenuEntradas>
      <MenuPlatoPrincipal></MenuPlatoPrincipal>
      <MenuPostres></MenuPostres>
    </section>
  );
};

export default Carta;
