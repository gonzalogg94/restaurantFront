import React from "react";
import Swal from "sweetalert2";
import {crearPedidoApi} from "../../helpers/queries";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

export default function Basket (props){
const {cartItems, onAdd, onRemove}= props;
const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.precio, 0);
const cubiertos = itemsPrice * 0.05;
const IVA = (itemsPrice + cubiertos) * 0.21;
const totalPrice = itemsPrice + cubiertos + IVA;

const navegacion = useNavigate()

// const precioCarro = JSON.parse(localStorage.getItem('cartPrice'));
// const precioCarroString = JSON.stringify(localStorage.getItem('cartPrice'));
// console.log(precioCarro)
// console.log(precioCarroString)
// const titularCarro = (JSON.parse(localStorage.getItem("tokenCliente")));   
// const clienteCarro = titularCarro.nombreCliente + ' ' + titularCarro.apellido
// const clienteCarroString = JSON.stringify(clienteCarro)
// console.log(clienteCarro)
// console.log(clienteCarroString)
// const productosOrdenados = (JSON.stringify(JSON.parse(localStorage.getItem("cartItems")).map(x => x.nombreProducto)))
// const productosCarro = JSON.parse(productosOrdenados)
// const productosCarroString = JSON.stringify(productosOrdenados)
// console.log(productosCarro)
// console.log(productosCarroString)

const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
      defaultValues: {
      detallePedido: "",
      estado:"",
      costoTotal: "",
      nombreClientePedido: "",
    },
  });

const [producto, setProducto] = useState("");
const [estado, setEstado] = useState("");
const [precio, setPrecio] = useState("");
const [cliente, setCliente] = useState("");

const cargarPedido = () => {
     const titularCarro = (JSON.parse(localStorage.getItem("tokenCliente")));   
     const clienteCarro = titularCarro.nombreCliente + ' ' + titularCarro.apellido
     localStorage.setItem('cartPrice', JSON.stringify(totalPrice)) 
     setProducto(JSON.parse(localStorage.getItem("cartItems")).map(x => x.nombreProducto));
     //setProducto("Carne");
     setEstado("Pendiente")
     setPrecio(localStorage.getItem('cartPrice'));
     //setPrecio(500);
     setCliente(clienteCarro); 
     //setCliente("Carlos");
    }

const borrarPedido = () => {      
      setProducto("");
      setEstado("");
      setPrecio("");
      setCliente("");
      localStorage.removeItem("cartItems");
      window.location.reload();

         
    }

  const hacerPedido = (pedido) => {
    console.log(pedido);
    console.log("desde el evento onsubmit");
    crearPedidoApi(pedido).then((respuesta) => {
      if (respuesta.status === 201){
      Swal.fire("Pedido Generado!","El pedido se creó correctamente","success");
     localStorage.removeItem("cartItems");
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
                    <button type="submit" onClick={cargarPedido}>
                         Cargar Pedido
                    </button>
                    <button type="submit" onClick={borrarPedido}>
                         Borrar Pedido
                    </button>
               </div>           
                   
               <div>
               <Form onSubmit={handleSubmit(hacerPedido)}>
                         <Form.Group className="mb-3" controlId="formBasicProductos">
                         <Form.Label>Productos Ordenados</Form.Label>
                         <Form.Control
                          type="text"
                          value = {producto}
                          readOnly = {true}
                         {...register("detallePedido", {
                          required: "Este dato es obligatorio",
                          minLength: {
                          value: 2,
                         message: "Debe ingresar como mínimo 2 caracteres",
                           },
                         maxLength: {
                         value: 5000,
                         message: "El pedido tiene un máximo 5000 caracteres",
                          },
                         })}
                         />
                         {/* <Form.Text className="text-warning">
                         {errors.detallePedido?.message}
                         </Form.Text> */}
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasiccostoTotal">
                         <Form.Label>Estado</Form.Label>
                         <Form.Control
                          type="text"
                          value= {estado}
                          readOnly={true}
                         {...register("estado", {
                          required: "Este dato es obligatorio",
                         })}
                         />
                         {/* <Form.Text className="text-warning">
                         {errors.estado?.message}
                         </Form.Text> */}
                         </Form.Group>



                         <Form.Group className="mb-3" controlId="formBasiccostoTotal">
                         <Form.Label>Precio total</Form.Label>
                         <Form.Control
                          type="number"
                          value= {precio}
                          readOnly={true}
                         {...register("costoTotal", {
                          required: "Este dato es obligatorio",
                          min: {
                          value: 1,
                         message: "Debe ingresar como mínimo un precio de 1",
                           },
                         max: {
                         value: 500000,
                         message: "El valor máximo para el pedido es $500.000",
                          },
                         })}
                         />
                         {/* <Form.Text className="text-warning">
                         {errors.costoTotal?.message}
                         </Form.Text> */}
                         </Form.Group>
                         
                         <Form.Group className="mb-3" controlId="formBasicNombreCliente">  
                         <Form.Label>Nombre del Cliente</Form.Label>
                         <Form.Control
                          type="text"
                          value= {cliente}
                          readOnly={true}
                         {...register("nombreClientePedido", {
                          required: "Este dato es obligatorio",
                          minLength: {
                          value: 2,
                         message: "Debe ingresar como mínimo 2 caracteres",
                           },
                         maxLength: {
                         value: 50,
                         message: "Existe un máximo 50 caracteres",
                          },
                         })}
                         />
                         {/* <Form.Text className="text-warning">
                         {errors.nombreClientePedido?.message}
                         </Form.Text> */}
                         </Form.Group>
                         <Button variant="primary" type="submit">
                    ENVIAR
                    </Button>
                    </Form> 
                    </div>
          
               
               </>
          )}
     </aside>
     )
}
