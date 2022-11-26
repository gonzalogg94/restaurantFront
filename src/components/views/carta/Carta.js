import React, { useEffect, useState } from 'react';
import Basket from './Basket';
import Header from './Header';
import Main from './Main';
import './StyleCarta.css'
import { consultarApi } from '../../helpers/queries';


function Carta () {
const [products, setProducts]=useState([])
useEffect  (()=>{

consultarApi().then((respuesta)=>{
console.log(respuesta)
setProducts(respuesta)
})

},[])
    return (
        <div className="App">
        <Header></Header>
        <div className="row">
        <Main products={products}></Main>
        <Basket></Basket>
        </div>
        </div>
    );
};

export default Carta;