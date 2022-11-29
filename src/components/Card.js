import React from 'react'
import './Card.css'
function Card({item,handleClick}) {
 const {img,title,price}=item
  return (
    <div className='card'>
        <img src={img} alt="" />
        <p>{title}</p>
        <p>price: {price}</p>
        <button onClick={()=>handleClick(item)} >add to cart</button>
    </div>
  )
}

export default Card