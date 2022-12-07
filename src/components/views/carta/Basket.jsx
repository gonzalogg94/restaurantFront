import React from "react";
import Swal from "sweetalert2";
import {tomarPedidoCliente} from "../../helpers/queries";
import Button from 'react-bootstrap/Button';


export default function Basket (props){
const {cartItems, onAdd, onRemove}= props;
const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
const cubiertos = itemsPrice * 0.05;
const IVA = (itemsPrice + cubiertos) * 0.21;
const totalPrice = itemsPrice + cubiertos + IVA;


const borrarPedido = () => {      
      localStorage.removeItem("cartItems");
      window.location.reload();
         
    }

  const hacerPedido = () => {
     const titularCarro = (JSON.parse(localStorage.getItem("tokenCliente")));   
     const clienteCarro = titularCarro.nombreCliente + ' ' + titularCarro.apellido
     localStorage.setItem('cartPrice', JSON.stringify(totalPrice)) 
    tomarPedidoCliente({
          detallePedido: JSON.parse(localStorage.getItem("cartItems")).map(x => x.nombreProducto),
          estado: "Pendiente",
          costoTotal: localStorage.getItem('cartPrice'),
          nombreClientePedido: clienteCarro,
      }).then((respuesta) => {
      if (respuesta.status === 201){
      Swal.fire({
          title: '¿Confirma su pedido?',
          text: "Su orden se registrará",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, quiero ordenar!',
          cancelButtonText: 'Prefiero revisar el pedido.'
     }).then((result) => {
          if (result.isConfirmed) {
           Swal.fire(
          'Orden procesada',
          'Su orden está en proceso.',
          'success'
       )
      }
     })
     } else {
      Swal.fire("Ocurrio un error", "Vuelva a intentarlo más tarde", "error");
      }
    });
   };
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
                    <Button variant="danger" type="submit" onClick={borrarPedido}>
                         Borrar Pedido
                    </Button>
                    <Button type="submit" onClick={hacerPedido}>
                         Enviar Pedido
                    </Button>
               </div>       
                  
               </>
          )}
     </aside>
     )
}
