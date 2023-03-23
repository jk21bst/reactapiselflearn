import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Routing } from './components/Routing';
import { useState } from 'react';
import Product from './components/Product';

function App() {
 

const[cart,setCart] = useState([])
const[product,setProduct]=useState([]);
const[warn,setWarn]=useState(false)

const handleClick=(item)=>{
  let isPresent=false
  cart.forEach((element)=>{
    if(item.id==element.id)
      isPresent=true;
   
  })
  if(isPresent){
    setWarn(true);
    setTimeout(()=>{
      setWarn(false);
    },6000);
      return 
    }
    setCart([...cart,item]);
    console.log(item)

}


 
  return (
  <div> 
  <Navbar size={cart.length}/>
 <Routing/>
 <Product handleClick={handleClick}/>
 <Cart/>
  </div>
  )
}

export default App;
