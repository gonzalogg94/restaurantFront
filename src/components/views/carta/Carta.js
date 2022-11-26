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
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>
        </div>
    );
};

export default Carta;