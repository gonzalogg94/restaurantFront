import React from "react";
import Product from "./Product";
import './StyleCarta.css'
import Spinner from "../../common/Spinner"
import { useEffect, useState } from "react";

export default function Main (props){
const [mostrarSpinner, setMostrarSpinner] = useState(true)
const {entrada, platoPrincipal, postre, bebida, aperitivo, onAdd} = props

useEffect(() => {
    setMostrarSpinner(false);
     ;
  }, []);

const mostrarComponenteEntrada = (mostrarSpinner === true) ? (<Spinner></Spinner>):(
                    entrada.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    )))
const mostrarComponentePlatoPrincipal = (mostrarSpinner === true) ? (<Spinner></Spinner>):(
                      platoPrincipal.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    )))
const mostrarComponentePostre = (mostrarSpinner === true) ? (<Spinner></Spinner>):(
                     postre.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    )))
const mostrarComponenteBebida = (mostrarSpinner === true) ? (<Spinner></Spinner>):(
                    bebida.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    )))
const mostrarComponenteAperitivo = (mostrarSpinner === true) ? (<Spinner></Spinner>):(
                     aperitivo.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                     )))

     return(
          <main className="col-12 col-md-8 col-lg-9">
          <article>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">ENTRADAS</h2>
                    <div className="row">
                    {mostrarComponenteEntrada}                  
                    </div>
               </section> 
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">PLATOS PRINCIPALES</h2>
                    <div className="row">
                    {mostrarComponentePlatoPrincipal}                    
                    </div>
               </section>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">POSTRES</h2>
                    <div className="row">
                    {mostrarComponentePostre}                   
                    </div>
               </section>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">BEBIDAS</h2>
                    <div className="row">
                    {mostrarComponenteBebida}                    
                    </div>
               </section>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">APERITIVOS</h2>
                    <div className="row">
                    {mostrarComponenteAperitivo}                    
                    </div>
               </section>        
             
          </article>
          </main>
     )
}


/*
import React from "react";
import Product from "./Product";
import './StyleCarta.css'

export default function Main (props){

const {entrada, platoPrincipal, postre, bebida, aperitivo, onAdd} = props

     return(
          <main className="col-12 col-md-8 col-lg-9">
          <article>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">ENTRADAS</h2>
                    <div className="row">
                    {entrada.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    ))}                  
                    </div>
               </section> 
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">PLATOS PRINCIPALES</h2>
                    <div className="row">
                    {platoPrincipal.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    ))}                    
                    </div>
               </section>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">POSTRES</h2>
                    <div className="row">
                    {postre.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    ))}                   
                    </div>
               </section>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">BEBIDAS</h2>
                    <div className="row">
                    {bebida.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                    ))}                    
                    </div>
               </section>
               <section>
                    <h2 className="text-center bg-success p-4 text-white rounded">APERITIVOS</h2>
                    <div className="row">
                    {aperitivo.map((product) =>(
                    <Product key={product._id} product={product} onAdd={onAdd}></Product>
                     ))}                    
                    </div>
               </section>        
             
          </article>
          </main>
     )
}

*/
