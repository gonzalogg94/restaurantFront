import React from "react";
import './StyleCarta.css'

export default function Header (props){
const {countCartItems} = props
     return (
        <header className="block row center">
            <div>
                <a href="#/">
                <h1>NUESTRA CARTA</h1>
                </a>
            </div>
            <div>
                <a href="#/">                  
                    
                Usted está ordenando { ' ' }
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):(
                    '0'
                )}            
                </a><a href="#/"> productos</a>
            </div>
        </header>
     )
}