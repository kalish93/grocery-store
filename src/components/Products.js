import React from 'react'
import Card from './Card'
import './Products.css'
import front from './images/OIP (1).jfif'
import { useState} from 'react'
import FrontImage from './FrontImage'

import list from "./data";
import Cart from './Cart'

function Products() {

  const [cart, setCart]= useState([])
  const handleClick=(item)=>{
    const exist = cart.find((x)=>x.id===item.id)
    if(exist){
      setCart(
        cart.map((x)=>x.id === item.id ? {...exist,amount :exist.amount + 1}:x)
      )
    }
    else{
      setCart([...cart,item])
    }
    
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const products = list.map((item) => (
    <Card key={item.id} item={item} handleClick={handleClick} />
  ))

  return (
    <div>
        <FrontImage src={front} headline='Our Products' moto='We serve fresh and organic fruits and vegetables.'/>
        <div className="cart">
          <span>
          <i class="fa fa-cart-plus fa-5x" aria-hidden="true"></i>
          </span>
          <span className='quantity'>{cart.length}</span>
        </div>
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        <div className='products'>
       {products}
       
    </div>
    </div>
  )
}

export default Products