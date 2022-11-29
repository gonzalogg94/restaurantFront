import React from "react";
import Swal from "sweetalert2";

export default function Basket (props){
const {cartItems, onAdd, onRemove}= props;
const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
const cubiertos = itemsPrice * 0.05;
const IVA = (itemsPrice + cubiertos) * 0.21;
const totalPrice = itemsPrice + cubiertos + IVA;

     return (
     <aside className="col-12 col-md-4 col-lg-3">
          <h2 className="text-center border">Tu Selección</h2>
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
                                             <button onClick={() =>  Swal.fire({
                         title: '¡Contáctate con nosotros!',
                         text: 'Haremos que tu velada sea un momento especial',
                         imageUrl: 'https://cdn.pixabay.com/photo/2016/11/23/14/44/hands-1853302_960_720.jpg',
                         imageWidth: 400,
                         imageHeight: 200,
                         imageAlt: 'Custom image',
                         })}>
                         ¡Contáctate con nosotros!
                    </button>
               </div>
               </>
          )}
     </aside>
     )
}