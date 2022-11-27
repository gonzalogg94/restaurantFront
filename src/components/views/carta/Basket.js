import React from "react";

export default function Basket (props){
const {cartItems, onAdd, onRemove}= props;
const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
const cubiertos = itemsPrice * 0.05;
const IVA = (itemsPrice + cubiertos) * 0.21;
const totalPrice = itemsPrice + cubiertos + IVA;

     return (
     <aside className="block col-1">
          <h2>Detalle de la orden</h2>
          <div>{cartItems.length === 0 && <div> La orden está vacía</div>}</div>
          {cartItems.map ((item) =>(
          <div key={item._id} className="row">
               <div className="col-2">{item.nombreProducto}</div>
               <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">
                     + 
                    </button>
                    <button onClick={()=>onRemove(item)} className="remove">
                     - 
                    </button>
               </div>
          <div className="col-2 text-right">
               {item.qty} x ${item.precio.toFixed(2)}
          </div>
          
          </div>
               
          ))}
          {cartItems.length !== 0 &&(
               <>
               <hr></hr>
               <div className="row">
                    <div className="col-2">Comida y bebida</div>
                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
               </div>
               <div className="row">
                    <div className="col-2">Cubiertos y espectáculo</div>
                    <div className="col-1 text-right">${cubiertos.toFixed(2)}</div>
               </div>
               <div className="row">
                    <div className="col-2">IVA</div>
                    <div className="col-1 text-right">${IVA.toFixed(2)}</div>
               </div>
               <div className="row">
                    <div className="col-2"><strong>Precio total</strong></div>
                    <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
               </div>
               <hr/>
               <div className="row">
                    <button onClick={() => alert ('Implement Checkout')}>
                         Checkout
                    </button>
               </div>
               </>
          )}
     </aside>
     )
}