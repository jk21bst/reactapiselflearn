import React from 'react';
 

import navbar from './navbar.css' 
import Product from './Product';

export const Navbar = ({size}) => {

 
  return (
    
   <div>
   
      <nav className='navbar'>
      <p className='navtitle'>Shopping Cart</p>
        <ul className='links'>
            <a href='/'></a>
            
        <a href='/product'>Products</a>
        
        <a href='/cart' ><span>{size}</span>Cart</a>
    
        <a href='/checkout'>Checkout</a>
       
       
        
        </ul>
        </nav>
        </div>
        
  )
}
