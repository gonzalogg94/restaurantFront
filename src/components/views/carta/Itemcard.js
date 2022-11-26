import React from 'react';
import {useCart} from "react-use-cart"

const Itemcard = (producto) => {
    const {addItem} = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"> 
            <div class="card p-0 overflow-hidden h-100 shadow">
            <img src={producto.img} class="card-img-top img-fluid" />
            <div class="card-body text-center">
             <h5 class="card-title">{producto.title}</h5>
            <h5 class="card-title">${producto.price}</h5>
            <button href="#" class="btn btn-success" onClick={()=>addItem(producto.item)}>Add to Cart</button>
            </div>
            </div>
        </div>
    );
};

export default Itemcard;