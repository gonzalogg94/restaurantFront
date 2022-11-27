import React from "react";
import Product from "./Product";
import './StyleCarta.css'

export default function Main (props){

const {entrada, platoPrincipal, postre, bebida, aperitivo, onAdd} = props

     return(
          <main className="block col-2">
          <div>
               <h2>Entradas</h2>
               <div className="row">
               {entrada.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
               ))}
               </div>
               </div>
               <div>
               <h2>Platos Principales</h2>
               <div className="row">
               {platoPrincipal.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
               ))}
               </div>
               <div>
               <h2>Postres</h2>
               <div className="row">
               {postre.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
               ))}
               </div>
               </div>
               <div>
               <h2>Bebidas</h2>
               <div className="row">
               {bebida.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
               ))}
               </div>
               </div>
               <div>
               <h2>Aperitivo</h2>
               <div className="row">
               {aperitivo.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
               ))}
               </div>
               </div>
          </div>
          </main>
     )
}


