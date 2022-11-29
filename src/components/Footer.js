import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>

        <div>
            <h3>Products</h3>
            <hr />
            <p>Vegetables</p>
            <p>fruits</p>
            <p>soft drinks</p>
        </div>
        
        <div className='contact-icons'>
          <h3>Contact us</h3>
          <hr />
    <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
    <i class="fa fa-telegram fa-lg" aria-hidden="true"></i>
    <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
    <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
    <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
    </div>
        
        <div>
            <h3>Address</h3>
            <hr />
            <p>head office: Addis Ababa, Ethiopia</p>
            <p>branch: sululta, Oromia, Ethiopia</p>
            <p>tel: +25111111111</p>
            <p>Email: organic@email.com</p>
        </div>
    </div>
  )
}

export default Footer