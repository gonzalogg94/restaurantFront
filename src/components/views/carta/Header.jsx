import React from "react";


export default function Header (props){
const {countCartItems} = props
     return (
        <header className="block row center">
            <div>
                <a href="#/">
                <h1 className="text-center">NUESTRA CARTA - ¡Cotiza tu velada!</h1>
                </a>
            </div>
            {/* <div>
                <a href="#/">                  
                    
                Usted está seleccionando { ' ' }
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):(
                    '0'
                )}            
                </a><a href="#/"> productos</a>
            </div> */}
        </header>
     )
}