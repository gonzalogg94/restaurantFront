import React from "react";
import './StyleCarta.css'

export default function Header (props){
const {countCartItems} = props
     return (
        <header>
            <div>
                <a href="#/">
                <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/">                  
                    
                Cart { ' ' }
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):(
                    ''
                )}            
                </a><a href="#/">SignIn</a>
            </div>
        </header>
     )
}