import React, { useState } from 'react'
import list from './../list';
import './../components/product.css'
import { Cart } from './Cart';


const Product = ({handleClick})=> {
  
    return (
      
       
        <div className="shop">
           
        <div className="shopTitle">
            <h5>Welcome to Online Shopping</h5>
            </div>
            <div className="products">
               
{
    list.map((item) => (
      
        <div className="product">
        <img src={item.productImage}/>
       <div className="description">
        <p>
            <b>{item.productName}</b> 
            <p>Available Quantity:{item.productQuantity}</p>
        </p>
        <p><b> ₹{item.productPrice}</b></p>
       </div>
       <button className='addToCartBttn' onClick={()=>{handleClick(item)}}>Add To Cart</button>

    </div>
    ))
}
    </div>
    </div>
    
      

   
   
   )}

export default Product;

