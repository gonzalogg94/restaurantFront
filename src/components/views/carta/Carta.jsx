import React, { useEffect, useState } from "react";
import Basket from "./Basket";
import Header from "./Header";
import Main from "./Main";
import "./StyleCarta.css";
import { consultarApi } from "../../helpers/queries";

function Carta() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x._id !== product._id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const [entrada, setEntrada] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      setEntrada(
        respuesta.filter(
          (producto) =>
            producto.categoria === "Entrada" && producto.estado === "Disponible"
        )
      );
    });
  }, []);

  const [platoPrincipal, setPlatoPrincipal] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      setPlatoPrincipal(
        respuesta.filter(
          (producto) =>
            producto.categoria === "Plato principal" &&
            producto.estado === "Disponible"
        )
      );
    });
  }, []);

  const [postre, setPostre] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      setPostre(
        respuesta.filter(
          (producto) =>
            producto.categoria === "Postre" && producto.estado === "Disponible"
        )
      );
    });
  }, []);

  const [bebida, setBebida] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      setBebida(
        respuesta.filter(
          (producto) =>
            producto.categoria === "Bebida" && producto.estado === "Disponible"
        )
      );
    });
  }, []);

  const [aperitivo, setAperitivo] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      setAperitivo(
        respuesta.filter(
          (producto) =>
            producto.categoria === "Aperitivo" &&
            producto.estado === "Disponible"
        )
      );
    });
  }, []);

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);

  return (
    <div className="App container">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main
          onAdd={onAdd}
          entrada={entrada}
          platoPrincipal={platoPrincipal}
          postre={postre}
          bebida={bebida}
          aperitivo={aperitivo}
        ></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Basket>
      </div>
    </div>
  );
}

export default Carta;
