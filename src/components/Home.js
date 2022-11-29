import React from 'react'
import './Home.css'
import front from './images/front.jfif'
import fruitBasket from './images/fruit-basket.jfif'
import vegetableBasket from './images/vegetable-basket.jfif'
import FrontImage from './FrontImage'
function Home() {
  return (
    <div className='home'>
      
    <FrontImage src={front} headline='Organic Store' moto="'The place where you find fresh and organic fruits and vegetables'"/>
    <div className='fruits'>
    <img className='fruit-basket' src={fruitBasket} alt="" height='100' width='100'/>
      <div className='fruits-descreption'>
      <h1>Fresh fruits</h1>
      <p>Our fruits are fresh, sweet, and healthy. you can eat them after food or make a juice from them.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quas modi iusto magnam laborum sint tempore! Est veniam rerum eum ipsam veritatis dolorum consectetur, voluptatum ipsum amet! Voluptate, consectetur voluptas.
      </p>
      </div>
      
    </div>
    <div className='vegetables'>
      <img className='vegetable-basket' src={vegetableBasket} alt="" />
      <div className='vegetables-descreption'>
        <h1>Vegetables</h1>
        <p>Veges are good for health. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia error at accusantium vitae doloremque odio minima non molestiae! Repellendus officiis suscipit aspernatur animi eligendi placeat sapiente ipsum eum quidem?</p>
      </div>
    </div>
    </div>
    
  )
}

export default Home