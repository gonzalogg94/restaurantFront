import React, { useEffect, useState } from 'react';
import Basket from './Basket';
import Header from './Header';
import Main from './Main';
import './StyleCarta.css'
import { consultarApi } from '../../helpers/queries';


function Carta () {
const [cartItems, setCartItems] = useState([]);
const onAdd = (product) =>{
    const exist = cartItems.find(x=> x._id === product._id)
    if(exist){
        setCartItems(cartItems.map(x => x._id === product._id ? {...exist, qty: exist.qty +1 } : x
            )
        );
    }else {
        setCartItems([...cartItems, {...product, qty: 1}])
    }

};

const onRemove =  (product) =>{
    const exist = cartItems.find((x) => x._id === product._id);
    if(exist.qty === 1){
        setCartItems(cartItems.filter((x) => x._id !== product._id))
    }else{
       setCartItems(cartItems.map((x) => x._id === product._id ? {...exist, qty: exist.qty  -1 } : x
            )
        );  
    }
}

const [entrada, setEntrada]=useState([])
useEffect  (()=>{

consultarApi().then((respuesta)=>{
console.log(respuesta)
setEntrada(respuesta.filter((producto) => producto.categoria === 'Entrada'))
})
},[])

const [platoPrincipal, setPlatoPrincipal] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setPlatoPrincipal(respuesta.filter((producto) => producto.categoria === 'Plato principal'))
})
},[])

const [postre, setPostre] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setPostre(respuesta.filter((producto) => producto.categoria === 'Postre'))
})
},[])

const [bebida, setBebida] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setBebida(respuesta.filter((producto) => producto.categoria === 'Bebida'))
})
},[])

const [aperitivo, setAperitivo] = useState([]);
useEffect  (()=>{
consultarApi().then((respuesta)=>{
console.log(respuesta)
setAperitivo(respuesta.filter((producto) => producto.categoria === 'Aperitivo'))
})
},[])


    return (
        <div className="App">
        <Header countCartItems ={cartItems.length}></Header>
        <div className="row">
        <Main onAdd={onAdd} entrada={entrada} platoPrincipal={platoPrincipal} postre={postre} bebida={bebida} aperitivo={aperitivo}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>
        </div>
    );
};

export default Carta;