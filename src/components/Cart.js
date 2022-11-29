
import { useEffect } from 'react';
import {useState,React} from 'react'
import './Cart.css'
import { db } from '../firebase-config'
import  { collection, addDoc} from 'firebase/firestore'
function Cart({cart,setCart,handleChange}) {
    const [price, setPrice] = useState(0)

    const cartCollectionRef = collection(db, 'cart')

    const createCart = async () =>{
      await addDoc(cartCollectionRef, {order:cart, price:price})
      setCart([])
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
      };

    const handlePrice=()=>{
        let total = 0;
        cart.map((item)=> total+= item.amount * item.price)
        setPrice(total)
    }


   

    useEffect(()=>{
        handlePrice();
    })

  return (
    <div className='cart'>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" height='40px' width='40px' />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))
      }
      <div className="total">
        <span>Total Price of your Cart-</span>
        <span>ETB {price}</span>
      </div>
      <button onClick={createCart}>Order</button>
    </div>
  )
}

export default Cart