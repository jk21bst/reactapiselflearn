
import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter  as Router} from 'react-router-dom'
import {Cart} from './Cart';
import Product from './Product';
import {Checkout} from './Checkout';

export const Routing = ({cart}) => {
  return (
    <div>
<Router>
<Routes>
   <Route path='/product' Component={Product}/>
  <Route path='/cart'Component={Cart}/>
 
  <Route path='/checkout' Component={Checkout}/>
 
</Routes>
</Router>

    </div>
  )
}





